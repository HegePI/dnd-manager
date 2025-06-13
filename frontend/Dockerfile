FROM oven/bun:latest AS base
WORKDIR /usr/src/app

# Stage 1: Install dependencies
FROM base AS deps
COPY package.json bun.lock ./
# Install all dependencies, including devDependencies, needed for the build
RUN bun install --frozen-lockfile

# Stage 2: Build the application
FROM base AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# Stage 3: Production release
FROM base AS release 
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build . 

USER bun 
EXPOSE 3000
ENTRYPOINT [ "bun", "index.js" ]
