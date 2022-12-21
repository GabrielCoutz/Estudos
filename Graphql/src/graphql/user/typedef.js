import { gql } from "apollo-server";
import { user, users } from "./resolver";

export const userTypeDef = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: ApiFiltersInput): [User!]!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
  }
`;
export const userResolver = {
  Query: {
    user,
    users,
  },
};
