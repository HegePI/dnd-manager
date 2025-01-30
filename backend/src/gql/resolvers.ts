import { characterQueries, characterMutations } from "./resolvers/characters";

export const resolvers = {
  Query: { ...characterQueries },

  Mutation: { ...characterMutations },
};
