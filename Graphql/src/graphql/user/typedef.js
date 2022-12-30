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
};
