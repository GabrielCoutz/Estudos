import { gql } from "apollo-server";
import { postResolver, postTypeDef } from "../graphql/post/typedef";
import { userResolver, userTypeDef } from "../graphql/user/typedef";

export const rootTypeDefs = gql`
  type Query {
    _empty: Boolean!
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDef, postTypeDef];
export const resolvers = [rootResolvers, userResolver, postResolver];
