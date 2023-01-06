import { gql } from "graphql-request";

const productTypeDefs = gql`
  extend type Query {
    products: [Product!]!
  }
  type Product {
    id: ID!
    name: String!
    priceId: String!
    price: Float!
    images: [String!]!
    category: String!
  }
`;

export default productTypeDefs;
