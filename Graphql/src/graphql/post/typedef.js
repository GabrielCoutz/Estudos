import { gql } from "apollo-server";
import { post, posts } from "./resolver";

export const postTypeDef = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    # user: User!
    indexRef: Int!
    createdAt: String!
  }
`;

export const postResolver = {
  Query: {
    post,
    posts,
  },
};
