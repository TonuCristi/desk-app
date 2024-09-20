import { AxiosResponse } from "axios";
import { api } from "../api/api";
import { Signup, UserResponse } from "../types/Auth.types";

const BASE_URL_AUTH = "/api/auth";
const BASE_URL_USERS = "/api/users";

export const AuthApi = {
  createUser(user: Signup) {
    return api
      .post(`${BASE_URL_AUTH}/signup`, user)
      .then(({ data }: AxiosResponse<string>) => data);
  },
  getLoggedUser() {
    return api
      .get(`${BASE_URL_USERS}/currentUser`)
      .then(({ data }: AxiosResponse<UserResponse>) => data);
  },
};
