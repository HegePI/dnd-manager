# Docker image to run db migrations to postgres db using node-pg-migrate and Bun

FROM oven/bun:1-debian

# Install required packages
RUN apt-get update && apt-get install -y netcat-traditional

# Set the working directory in the container
WORKDIR /migrations

# Copy files to docker image
COPY . . 

# Install dependencies using Bun
RUN bun install

# Migrations is not run using a CMD here, as this image is intended to be used in a Kubernetes Job or similar.

