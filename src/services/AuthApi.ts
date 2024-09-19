import { AxiosResponse } from "axios";
import { api } from "../api/api";
import { Signup } from "../types/Auth.types";

const BASE_URL = "/api/users";

export const AuthApi = {
  createUser(user: Signup) {
    return api
      .post(BASE_URL, user)
      .then(({ data }: AxiosResponse<string>) => data);
  },
};
