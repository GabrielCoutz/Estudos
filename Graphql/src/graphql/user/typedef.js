import { gql } from "apollo-server";
import { user, users, createUser, updateUser, deleteUser } from "./resolver";

export const userTypeDef = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInput): [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    deleteUser(id: ID!): Boolean!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    password: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
    password: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post!]!
  }
`;

const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postApi.dataLoader.load(id);
};

export const userResolver = {
  Query: {
    user,
    users,
  },
  User: {
    posts,
  },
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};
