FROM node:slim AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json /temp/dev
RUN cd /temp/dev && npm install

RUN mkdir -p /temp/prod
COPY package.json /temp/prod
RUN cd /temp/prod && npm install --omit=dev

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN npm run build

FROM base AS release
COPY --from=prerelease /usr/src/app/build .

USER node
EXPOSE 3000
ENTRYPOINT [ "node", "index.js" ]

