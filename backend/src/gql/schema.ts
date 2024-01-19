export const typeDefs = `
type User {
    id: ID!
    name: String!
    username: String!
    created_at: String!
    updated_at: String!
    deleted_at: String
  }
  
  input CreateUserInput {
    name: String!
    username: String!
  }
  
  input UpdateUserInput {
    id: ID!
    name: String
    username: String
  }

  input DeleteUserInput {
    id: ID!
  }
  
  type Query {
    user(id: ID!): User
    users: [User]
    userCount: Int!
  }
  
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
  }  
`;
