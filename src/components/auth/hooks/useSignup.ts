import { useContext } from "react";

import { Signup } from "../../../types/Auth.types";
import { AuthContext } from "../../../contexts/AuthContext";

import { supabase } from "../../../api/supabase";
import { mapUser } from "../../../utils/mapUser";
import { useNavigate } from "react-router";

export function useSignup() {
  const { isLoading, error, setToken, setUser, setIsLoading, setError } =
    useContext(AuthContext);
  const navigate = useNavigate();

  async function signup(user: Signup) {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          username: user.username,
        },
      },
    });

    if (error) {
      setError("Something went wrong...");
      setIsLoading(false);
    }

    if (data.user && data.session) {
      localStorage.setItem("token", data.session.access_token);
      setToken(data.session.access_token);
      const user = mapUser(data.user);
      setUser(user);
      setIsLoading(false);
      navigate("/");
    }
  }

  return { isLoading, error, signup };
}
