import { gql } from "apollo-server";
import { post, posts, createPost, updatePost, deletePost } from "./resolver";

export const postTypeDef = gql`
  extend type Query {
    post(id: ID!): Post!
    posts(input: ApiFiltersInput): [Post!]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput!): Post!
    updatePost(postId: ID!, data: UpdatePostInput!): Post!
    deletePost(postId: ID!): Boolean!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    indexRef: Int!
    user: User!
    createdAt: String!
  }

  input CreatePostInput {
    title: String!
    body: String!
    userId: String!
  }

  input UpdatePostInput {
    title: String
    body: String
    userId: String
  }
`;

export const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userApi.dataLoader.load(userId);
};

export const postResolver = {
  Query: {
    post,
    posts,
  },
  Post: {
    user,
  },
  Mutation: {
    createPost,
    updatePost,
    deletePost,
  },
};
