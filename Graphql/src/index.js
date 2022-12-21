import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schemas/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4003).then(({ url }) => {
  console.log(url);
});
