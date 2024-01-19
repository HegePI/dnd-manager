import { userQueries, userMutations } from "./resolvers/users";

export const resolvers = {
  Query: { ...userQueries },

  Mutation: { ...userMutations },
};
