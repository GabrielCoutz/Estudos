import { RESTDataSource } from "apollo-datasource-rest";
import { postDataLoaderFactory } from "../post/dataloaders";

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + "/posts/";
    this.dataLoader = postDataLoaderFactory(this.getPosts.bind(this));
  }

  async getPosts(urlParams = {}) {
    return this.get("", urlParams, {
      cacheOptions: {
        ttl: 60,
      },
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 60,
      },
    });
  }
}
