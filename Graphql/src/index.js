import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => "xampson",
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(url);
});
