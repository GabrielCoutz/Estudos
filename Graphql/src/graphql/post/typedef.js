import { gql } from "apollo-server";
import { post, posts } from "./resolver";

export const postTypeDef = gql`
  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFiltersInput): [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    user: User!
    createdAt: String!
  }
`;

export const user = async ({ userId }, _, { userDataLoader }) => {
  return userDataLoader.load(userId);
};

export const postResolver = {
  Query: {
    post,
    posts,
  },
  Post: {
    user,
  },
};
