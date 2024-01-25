import { characterQueries, characterMutations } from "./resolvers/users";

export const resolvers = {
  Query: { ...characterQueries },

  Mutation: { ...characterMutations },
};
