# Use an official Bun image. Choose a specific version if needed, e.g., oven/bun:1.0.0
FROM oven/bun:1

# Set the working directory in the container
WORKDIR /app

# Copy package.json, bun.lockb (Bun's lockfile), and tsconfig.json
# Copying tsconfig.json is good practice if tsc is run via a bun script.
COPY package.json bun.lockb* tsconfig.json ./
# bun.lockb* is to catch potential OS differences if it's ever not just bun.lockb

# Install dependencies using Bun
# --frozen-lockfile ensures that bun.lockb is used and not modified.
RUN bun install --frozen-lockfile

# Copy the rest of your application code (src, migrations, etc.)
COPY . .

# Build your TypeScript application
# This assumes you have a "build" script in your package.json (e.g., "build": "tsc")
# and your tsconfig.json is configured to output to a 'dist' directory.
RUN bun run build

# Expose the port your application runs on.
# Default to 4000 if PORT is not set in the environment; adjust as needed from your .env.
EXPOSE ${PORT:-4000}

# Command to run your application using Bun.
# This should execute the compiled JavaScript entry point.
# Your package.json "start" script should be like: "bun dist/src/index.js"
CMD ["bun", "start"]
