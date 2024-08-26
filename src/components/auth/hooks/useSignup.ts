import { useContext } from "react";

import { Signup } from "../../../types/Auth.types";
import { AuthContext } from "../../../contexts/AuthContext";

import { supabase } from "../../../api/supabase";
import { mapUser } from "../../../utils/mapUser";

export function useSignup() {
  const { isLoading, error, setUser, setIsLoading, setError } =
    useContext(AuthContext);

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

    console.log(data);

    if (error) {
      setError("Something went wrong...");
      return setIsLoading(false);
    }

    if (data.user && data.session) {
      localStorage.setItem("token", data.session.access_token);
      const user = mapUser(data.user);
      setUser(user);
      console.log(user);
      return setIsLoading(false);
    }
  }

  return { isLoading, error, signup };
}
