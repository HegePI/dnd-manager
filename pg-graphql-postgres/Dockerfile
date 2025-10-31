ARG SUPABASE_VERSION=17.6.1.034

FROM supabase/postgres:${SUPABASE_VERSION}

# Install build dependencies and PostgreSQL development packages
RUN apt-get update \
    && apt-get install -y postgresql-common \
    && /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y \
    && apt-get update \
    && apt-get install -y \
    curl \
    ca-certificates \
    pkg-config \
    openssl \
    libssl-dev \
    build-essential \
    git \
    postgresql-server-dev-18 \
    postgresql-18 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /home

ENV HOME=/home \
    PATH=/home/.cargo/bin:$PATH

RUN chown postgres:postgres /home

# Ensure a system user exists with UID 1001 to match chart securityContext expectations
RUN if ! getent passwd 1001 >/dev/null 2>&1; then \
    useradd -u 1001 -m -d /home/pguser -s /bin/bash pguser || true; \
    mkdir -p /home/pguser; chown -R 1001:1001 /home/pguser; \
    fi

USER postgres

# Install Rust and build tools as postgres user
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --no-modify-path --profile minimal --default-toolchain stable \
    && git clone https://github.com/supabase/pg_graphql.git \
    && cd pg_graphql \
    && cargo install cargo-pgrx --version 0.16.1 --locked \
    && cargo pgrx init --pg18 $(which pg_config) \
    && cargo build --release --features pg18

USER root

# Install extension as root (needed for permission to write to /usr/share/postgresql)
RUN cd /home/pg_graphql \
    && cargo pgrx install --release --features pg18 \
    && echo "CREATE EXTENSION IF NOT EXISTS pg_graphql;" > /docker-entrypoint-initdb.d/enable-pg_graphql.sql \
    && chown -R postgres:postgres /usr/share/postgresql/18/extension/pg_graphql* \
    && cd /home \
    && rm -rf pg_graphql \
    && rm -rf .cargo/registry/src/* \
    && rm -rf .cargo/registry/cache/* \
    && rm -rf .rustup

USER postgres