import { gql } from "apollo-server";

export const userTypeDef = gql`
  extend type Query {
    user: User!
    users: [User!]!
  }
  type User {
    id: ID!
    name: String!
  }
`;

const user = () => ({ id: "1", name: "John" });

const users = () => [
  { id: "1", name: "John" },
  { id: "2", name: "Xampson" },
];

export const userResolver = {
  Query: {
    user,
    users,
  },
};
