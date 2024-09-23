import { useContext } from "react";
import { useNavigate } from "react-router";

import { Login } from "../../../types/Auth.types";
import { AuthApi } from "../../../services/AuthApi";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { storeToken } from "../../../utils/storeToken";

export function useLogin() {
  const { isLoading, error, setToken, setIsLoading, setError } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  function login(user: Login) {
    setIsLoading(true);
    AuthApi.loginUser(user)
      .then((res) => {
        setToken(res);
        navigate("/");
        storeToken(res);
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { isLoading, error, login };
}
