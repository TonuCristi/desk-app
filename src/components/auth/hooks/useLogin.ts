import { useContext } from "react";
import { supabase } from "../../../api/supabase";
import { Login } from "../../../types/Auth.types";
import { AuthContext } from "../../../contexts/AuthContext";
import { mapUser } from "../../../utils/mapUser";
import { useNavigate } from "react-router";

export function useLogin() {
  const { isLoading, error, setToken, setUser, setIsLoading, setError } =
    useContext(AuthContext);
  const navigate = useNavigate();

  async function login(user: Login) {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      ...user,
    });

    if (error) {
      setError("Something went wrong...");
      setIsLoading(false);
      return;
    }

    if (data.user && data.session) {
      localStorage.setItem("token", data.session.access_token);
      setToken(data.session.access_token);
      const user = mapUser(data.user);
      setUser(user);
      setIsLoading(false);
      navigate("/");
      return;
    }
  }

  return { isLoading, error, login };
}
