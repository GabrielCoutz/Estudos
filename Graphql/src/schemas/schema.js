import { gql } from "apollo-server";
import { apiFiltersResolver } from "../graphql/api-filters/resolver";
import { apiFiltersTypedef } from "../graphql/api-filters/typedef";
import { loginResolver } from "../graphql/login/resolver";
import { loginTypedef } from "../graphql/login/typedef";
import { postResolver, postTypeDef } from "../graphql/post/typedef";
import { userResolver, userTypeDef } from "../graphql/user/typedef";

export const rootTypeDefs = gql`
  type Query {
    _empty: Boolean!
  }
  type Mutation {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDef,
  postTypeDef,
  apiFiltersTypedef,
  loginTypedef,
];
export const resolvers = [
  rootResolvers,
  userResolver,
  postResolver,
  apiFiltersResolver,
  loginResolver,
];
