FROM nginx:1.29.3-alpine
ARG PUBLIC_GRAPHQL_URL=http://localhost:3000/rpc/graphql
COPY index.html /usr/share/nginx/html/index.html
RUN sed -i "s|__PUBLIC_GRAPHQL_URL__|${PUBLIC_GRAPHQL_URL}|g" /usr/share/nginx/html/index.html
