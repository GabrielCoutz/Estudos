import { RESTDataSource } from "apollo-datasource-rest";
import { postDataLoaderFactory } from "../post/dataloaders";
import { checkUserIsLogged } from "./resolver";
import {
  createPostFn,
  deletePostFn,
  updatePostFn,
} from "./utils/post-repository";

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + "/posts/";
    this.dataLoader = postDataLoaderFactory(this.getPosts.bind(this));
  }

  async getPosts(urlParams = {}) {
    return this.get("", urlParams, {
      cacheOptions: {
        ttl: 0,
      },
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 0,
      },
    });
  }

  async createPost(postData, loggedUserId) {
    return createPostFn(postData, loggedUserId, this);
  }

  async updatePost(postId, postData, loggedUserId) {
    return updatePostFn(postId, postData, this, loggedUserId);
  }

  async deletePost(postId, loggedUserId) {
    return deletePostFn(postId, this, loggedUserId);
  }
}
