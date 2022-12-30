import { RESTDataSource } from "apollo-datasource-rest";
import { userDataLoaderFactory } from "../user/dataloaders";

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + "/users/";
    this.dataLoader = userDataLoaderFactory(this.getUsers.bind(this));
  }

  async getUsers(urlParams = {}) {
    return this.get("", urlParams, {
      cacheOptions: {
        ttl: 60,
      },
    });
  }

  async getUser(id) {
    return this.get(id, undefined, {
      cacheOptions: {
        ttl: 60,
      },
    });
  }
}
