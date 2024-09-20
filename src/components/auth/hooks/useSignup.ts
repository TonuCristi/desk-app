import { useContext } from "react";

import { GlobalContext } from "../../../contexts/GlobalContext";
import { AuthApi } from "../../../services/AuthApi";
import { Signup } from "../../../types/Auth.types";
import { useNavigate } from "react-router";

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
        localStorage.setItem("token", res);
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  }

  return { isLoading, error, signup };
}
