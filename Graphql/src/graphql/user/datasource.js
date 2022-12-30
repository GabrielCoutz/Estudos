import { RESTDataSource } from "apollo-datasource-rest";
import { userDataLoaderFactory } from "../user/dataloaders";
import {
  createUserFn,
  updateUserFn,
  deleteUserFn,
} from "./utils/user-repository";

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

  async createUser(data) {
    return createUserFn(data, this);
  }

  async updateUser(id, data) {
    return updateUserFn(id, data, this);
  }

  async deleteUser(id) {
    return deleteUserFn(id, this);
  }
}
