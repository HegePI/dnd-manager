#!/usr/bin/env bash
set -euo pipefail

# check-app-version.sh
# Uses jq (when available) to read package.json versions. Uses yq (when available)
# to read Chart.yaml appVersion. Falls back to sed parsing if tools are missing.

command_exists() { command -v "$1" >/dev/null 2>&1; }

get_package_version() {
    local file="$1"
    if [ ! -f "$file" ]; then
        echo "Error: File $file not found" >&2
        return 1
    fi
    if command_exists jq; then
        # Use jq to grab the version field safely
        jq -r '.version // empty' "$file" | head -n1
    else
        echo "Warning: jq not found; falling back to sed parsing" >&2
        sed -n 's/.*"version"[[:space:]]*:[[:space:]]*"\([^" ]*\)".*/\1/p' "$file" | head -n1
    fi
}

get_helm_app_version() {
    local file="$1"
    if [ ! -f "$file" ]; then
        echo "Error: File $file not found" >&2
        return 1
    fi
    if command_exists yq; then
        # Try common invocation patterns for different yq implementations
        local out
        if out=$(yq e '.appVersion' "$file" 2>/dev/null); then
            echo "$out" | sed 's/^"\(.*\)"$/\1/'
            return 0
        fi
        if out=$(yq r "$file" 'appVersion' 2>/dev/null); then
            echo "$out" | sed 's/^"\(.*\)"$/\1/'
            return 0
        fi
        # Some python-based yq variants expect filter first
        if out=$(yq '.appVersion' "$file" 2>/dev/null); then
            echo "$out" | sed 's/^"\(.*\)"$/\1/'
            return 0
        fi
        # If yq exists but none of the invocations worked, fall through to sed
        echo "Warning: yq found but could not parse $file; falling back to sed" >&2
    fi
    # fallback to sed for simple parsing
    sed -n "s/^[[:space:]]*appVersion:[[:space:]]*[\"'\{0,1\}]\{0,1\}\([^\"'[:space:]]*\).*/\1/p" "$file" | head -n1
}

FRONTEND_PKG="frontend/package.json"
BACKEND_PKG="backend/package.json"
FRONTEND_CHART="k8s/helm/charts/frontend/Chart.yaml"
BACKEND_CHART="k8s/helm/charts/backend/Chart.yaml"

FRONTEND_PACKAGE_VERSION="$(get_package_version "$FRONTEND_PKG")"
BACKEND_PACKAGE_VERSION="$(get_package_version "$BACKEND_PKG")"
FRONTEND_HELM_VERSION="$(get_helm_app_version "$FRONTEND_CHART")"
BACKEND_HELM_VERSION="$(get_helm_app_version "$BACKEND_CHART")"

echo "Frontend package version: ${FRONTEND_PACKAGE_VERSION:-<missing>}"
echo "Frontend helm appVersion: ${FRONTEND_HELM_VERSION:-<missing>}"
echo "Backend package version: ${BACKEND_PACKAGE_VERSION:-<missing>}"
echo "Backend helm appVersion: ${BACKEND_HELM_VERSION:-<missing>}"

rc=0
if [ -z "${FRONTEND_PACKAGE_VERSION:-}" ] || [ -z "${FRONTEND_HELM_VERSION:-}" ]; then
    echo "Error: Could not determine frontend versions" >&2
    rc=1
elif [ "$FRONTEND_PACKAGE_VERSION" != "$FRONTEND_HELM_VERSION" ]; then
    echo "Mismatch: frontend package.json ($FRONTEND_PACKAGE_VERSION) != frontend Chart.yaml appVersion ($FRONTEND_HELM_VERSION)" >&2
    rc=1
fi

if [ -z "${BACKEND_PACKAGE_VERSION:-}" ] || [ -z "${BACKEND_HELM_VERSION:-}" ]; then
    echo "Error: Could not determine backend versions" >&2
    rc=1
elif [ "$BACKEND_PACKAGE_VERSION" != "$BACKEND_HELM_VERSION" ]; then
    echo "Mismatch: backend package.json ($BACKEND_PACKAGE_VERSION) != backend Chart.yaml appVersion ($BACKEND_HELM_VERSION)" >&2
    rc=1
fi

if [ "$rc" -eq 0 ]; then
    echo "All versions match."
fi

exit "$rc"
