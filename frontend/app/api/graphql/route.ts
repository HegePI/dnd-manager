import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { Pool, PoolClient } from "pg";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

export interface Context {
  client: PoolClient;
}

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

const pool = new Pool({
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    req,
    res,
    client: await pool.connect(),
  }),
});

export { handler as GET, handler as POST };
