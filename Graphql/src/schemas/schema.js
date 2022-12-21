import { gql } from "apollo-server";
import { userResolver, userTypeDef } from "../graphql/user/typedef";

export const rootTypeDefs = gql`
  type Query {
    hi: String!
  }
`;

const rootResolvers = {
  Query: {
    hi: () => "xampson",
  },
};

export const typeDefs = [rootTypeDefs, userTypeDef];
export const resolvers = [rootResolvers, userResolver];
