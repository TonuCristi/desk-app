import { useContext } from "react";
import { useNavigate } from "react-router";

import { GlobalContext } from "../../../contexts/GlobalContext";
import { AuthApi } from "../../../services/AuthApi";
import { Signup } from "../../../types/Auth.types";
import { storeToken } from "../../../utils/storeToken";

export function useSignup() {
  const { isLoading, error, setToken, setIsLoading, setError } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  function signup(user: Signup) {
    setIsLoading(true);
    AuthApi.createUser(user)
      .then((res) => {
        setToken(res);
        navigate("/");
        storeToken(res);
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { isLoading, error, signup };
}
