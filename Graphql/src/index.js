import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schemas/schema";
import { PostsApi } from "./graphql/post/datasource";
import { UsersApi } from "./graphql/user/datasource";
import { LoginApi } from "./graphql/login/datasource";
import context from "./graphql/context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      userApi: new UsersApi(),
      loginApi: new LoginApi(),
    };
  },
  introspection: true,
});

server.listen(4003);
