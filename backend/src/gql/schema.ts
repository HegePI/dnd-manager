export const typeDefs = `
type Character {
    id: ID!
    user_id: ID!
    name: String!
    created_at: String!
    updated_at: String!
    deleted_at: String
  }
  
  input CreateCharacterInput {
    user_id: ID!
    name: String!
  }
  
  input UpdateCharacterInput {
    id: ID!
    name: String
  }

  input DeleteCharacterInput {
    id: ID!
  }
  
  type Query {
    character(id: ID!): Character
    characters: [Character]
    characterCount: Int!
  }
  
  type Mutation {
    createCharacter(input: CreateCharacterInput!): Character
    updateCharacter(id: ID!, input: UpdateCharacterInput!): Character
    deleteCharacter(id: ID!): Character
  }  
`;
