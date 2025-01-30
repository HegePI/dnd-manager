import express from "express";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import cors from "cors";
import dotenv from "dotenv";
import { useServer } from "graphql-ws/lib/use/ws";
import http from "http";
import { Pool } from "pg";
import { WebSocketServer } from "ws";
import { resolvers } from "./gql/resolvers";
import { typeDefs } from "./gql/schema";

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  PORT,
} = process.env;

export const pool = new Pool({
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

export interface Context {
  pool: Pool;
  req: unknown;
}

const start = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/subscription",
  });

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const serverCleanup = useServer({ schema }, wsServer);

  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();

  app.use(
    "/",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }: any) => {
        const context: Context = {
          req,
          pool: pool,
        };
        return context;
      },
    })
  );

  httpServer.listen(PORT, () =>
    console.log(`Server is now running on http://localhost:${process.env.PORT}`)
  );
};

start();
