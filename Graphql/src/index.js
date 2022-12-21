import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schemas/schema";
import context from "./graphql/context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4003).then(({ url }) => {
  console.log(url);
});
