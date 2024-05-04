FROM node:slim AS app

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

RUN rm -rf src/ static/ emailTemplates/ docker-compose.yml

USER node:node

EXPOSE 3000

CMD ["node","build/index.js"]