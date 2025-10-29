#!/bin/bash

# Function to extract version from package.json
get_package_version() {
    grep '"version":' "$1" | awk -F'"' '{print $4}'
}

# Function to extract appVersion from Chart.yaml
get_helm_app_version() {
    grep 'appVersion:' "$1" | awk '{print $2}' | tr -d '"'
}

# Get versions
FRONTEND_PACKAGE_VERSION=$(get_package_version frontend/package.json)
BACKEND_PACKAGE_VERSION=$(get_package_version backend/package.json)
FRONTEND_HELM_VERSION=$(get_helm_app_version k8s/helm/charts/frontend/Chart.yaml)
BACKEND_HELM_VERSION=$(get_helm_app_version k8s/helm/charts/backend/Chart.yaml)

# Print versions for debugging
echo "Frontend package version: $FRONTEND_PACKAGE_VERSION"
echo "Backend package version: $BACKEND_PACKAGE_VERSION"
echo "Frontend helm appVersion: $FRONTEND_HELM_VERSION"
echo "Backend helm appVersion: $BACKEND_HELM_VERSION"

# Check if all versions are the same
if [ "$FRONTEND_PACKAGE_VERSION" == "$BACKEND_PACKAGE_VERSION" ] && \
   [ "$FRONTEND_PACKAGE_VERSION" == "$FRONTEND_HELM_VERSION" ] && \
   [ "$FRONTEND_PACKAGE_VERSION" == "$BACKEND_HELM_VERSION" ]; then
    echo "All versions match."
    exit 0
else
    echo "Error: Version mismatch found."
    exit 1
fi
