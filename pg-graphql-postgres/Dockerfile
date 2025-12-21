# Stage 1: Builder
# This stage will download the source code and build the extension.
ARG POSTGRES_VERSION=17
FROM postgres:$POSTGRES_VERSION-bookworm AS builder

# Set the version of pg_graphql, pgrx and postgres to build
ARG PG_GRAPHQL_VERSION=v1.5.11
ARG PGRX_VERSION=0.12.9
ARG POSTGRES_VERSION=17

# Install build dependencies in a single layer
RUN apt-get update \
    && apt-get install -y postgresql-common ca-certificates \
    && /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y \
    && apt-get update --fix-missing \
    && apt-get install -y \
    build-essential \
    curl \
    git \
    libssl-dev \
    libpq-dev \
    openssl \
    postgresql-server-dev-${POSTGRES_VERSION} \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# Install Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

# Install pgrx for building postgres extensions with Rust
RUN cargo install cargo-pgrx --version $PGRX_VERSION --locked

# Clone and build pg_graphql from a specific tag for reproducibility
RUN git clone --branch $PG_GRAPHQL_VERSION https://github.com/supabase/pg_graphql.git /tmp/pg_graphql
WORKDIR /tmp/pg_graphql

# Build and install the extension
RUN cargo pgrx init --pg$POSTGRES_VERSION $(which pg_config)
RUN cargo pgrx install --release --features pg$POSTGRES_VERSION

# Add a script to enable the extension on database initialization
RUN echo "CREATE EXTENSION IF NOT EXISTS pg_graphql;" > /docker-entrypoint-initdb.d/enable-pg_graphql.sql

# Ensure the postgres user owns the extension files, as the entrypoint script runs as that user
RUN chown -R postgres:postgres /usr/share/postgresql/$POSTGRES_VERSION/extension /usr/lib/postgresql/$POSTGRES_VERSION/lib

# Switch to the non-root postgres user for better security
USER postgres

# Stage 2: Final image

FROM postgres:$POSTGRES_VERSION-bookworm

ARG POSTGRES_VERSION=17

# Copy the built extension from the builder stage
COPY --from=builder --chown=postgres:postgres /usr/share/postgresql/$POSTGRES_VERSION/extension/pg_graphql* /usr/share/postgresql/$POSTGRES_VERSION/extension/
# COPY --from=builder --chown=postgres:postgres /usr/lib/postgresql/$POSTGRES_VERSION/lib/libpq-fe.6.dylib /usr/lib/postgresql/$POSTGRES_VERSION/lib
COPY --from=builder --chown=postgres:postgres /usr/lib/postgresql/$POSTGRES_VERSION/lib/pg_graphql.so /usr/lib/postgresql/$POSTGRES_VERSION/lib/pg_graphql.so
COPY --from=builder --chown=postgres:postgres /docker-entrypoint-initdb.d/enable-pg_graphql.sql /docker-entrypoint-initdb.d/enable-pg_graphql.sql

USER postgres