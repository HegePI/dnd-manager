#!/bin/bash

# Function to extract version from package.json
get_package_version() {
    if [ ! -f "$1" ]; then
        echo "Error: File $1 not found" >&2
        exit 1
    fi
    local version=$(grep '"version":' "$1" | awk -F'"' '{print $4}')
    if [ -z "$version" ]; then
        echo "Error: Could not extract version from $1" >&2
        exit 1
    fi
    echo "$version"
}

# Function to extract appVersion from Chart.yaml
get_helm_app_version() {
    if [ ! -f "$1" ]; then
        echo "Error: File $1 not found" >&2
        exit 1
    fi
    local version=$(grep 'appVersion:' "$1" | awk '{print $2}')
    if [ -z "$version" ]; then
        echo "Error: Could not extract appVersion from $1" >&2
        exit 1
    fi
    echo "$version"
}


# Get versions
FRONTEND_PACKAGE_VERSION="$(get_package_version frontend/package.json)"
BACKEND_PACKAGE_VERSION="$(get_package_version backend/package.json)"
FRONTEND_HELM_VERSION="$(get_helm_app_version k8s/helm/charts/frontend/Chart.yaml)"
BACKEND_HELM_VERSION="$(get_helm_app_version k8s/helm/charts/backend/Chart.yaml)"

# Print versions for debugging
echo "Frontend package version: $FRONTEND_PACKAGE_VERSION"
echo "Backend package version: $BACKEND_PACKAGE_VERSION"
echo "Frontend helm appVersion: $FRONTEND_HELM_VERSION"
echo "Backend helm appVersion: $BACKEND_HELM_VERSION"

# Check if all versions are the same
if [ "$FRONTEND_PACKAGE_VERSION" == "$FRONTEND_HELM_VERSION" ] && \
   [ "$BACKEND_PACKAGE_VERSION" == "$BACKEND_HELM_VERSION" ]; then
    echo "All versions match."
    exit 0 # All versions match, exit successfully
else
    echo "Error: Version mismatch found."
    exit 1
fi
