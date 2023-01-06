import { ApolloServer, gql } from "apollo-server";
import { GraphQLClient } from "graphql-request";
import productTypeDefs from "./product/typedefs";
import context from "./context";
import productResolvers from "./product/resolver";
import { loadStripe } from "@stripe/stripe-js";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

const stripePromise = loadStripe(process.env.STRIPE_SECRET_KEY);

const client = require("stripe")(process.env.STRIPE_SECRET_KEY);

// async function xampson() {
//   const { id } = await client.products.create({
//     name: "Basic Dashboard",
//   });
//   const product = await client.prices.create({
//     unit_amount: 1500,
//     currency: "BRL",
//     product: id,
//   });
//   console.log(product);
// }

// xampson();

const typeDefs = [rootTypeDefs, productTypeDefs];
const resolvers = [rootResolvers, productResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen();

export default client;
