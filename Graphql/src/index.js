import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schemas/schema";
import context from "./graphql/context";
import { PostsApi } from "./graphql/post/datasource";
import { UsersApi } from "./graphql/user/datasource";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UsersApi(),
    };
  },
});

server.listen(4003);
