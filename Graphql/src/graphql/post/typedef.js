import { gql } from "apollo-server";
import { post, posts } from "./resolver";

export const postTypeDef = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: ApiFiltersInput): [Post!]!
  }

  union PostResult = PostNotFound | PostTimeout | Post

  interface PostError {
    statusCode: Int!
    message: String!
  }

  type PostNotFound implements PostError {
    statusCode: Int!
    message: String!
    postId: String!
  }

  type PostTimeout implements PostError {
    statusCode: Int!
    message: String!
    timeout: Int!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    createdAt: String!
    teste: String!
  }
`;

export const postResolver = {
  Query: {
    post,
    posts,
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== "undefined") return "PostNotFound";
      if (typeof obj.timeout !== "undefined") return "PostTimeout";
      if (typeof obj.id !== "undefined") return "Post";
      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== "undefined") return "PostNotFound";
      if (typeof obj.timeout !== "undefined") return "PostTimeout";
      return null;
    },
  },
};
