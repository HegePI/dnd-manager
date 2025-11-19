# Docker image to run db migrations to postgres db using node-pg-migrate and Bun

FROM oven/bun:1-debian

# Install required packages
RUN apt-get update && apt-get install -y netcat-traditional

# Set the working directory in the container
WORKDIR /migrations

# Copy package.json and bun.lockb (Bun's lockfile)
COPY package.json bun.lockb* ./
# bun.lockb* is to catch potential OS differences if it's ever not just bun.lockb

# Install dependencies using Bun
# --frozen-lockfile ensures that bun.lockb is used and not modified.
RUN bun install --frozen-lockfile

# Copy the migration scripts and other necessary files
COPY . .

# Migrations is not run using a CMD here, as this image is intended to be used in a Kubernetes Job or similar.

