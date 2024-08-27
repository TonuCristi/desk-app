import { useContext } from "react";
import { supabase } from "../../../api/supabase";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router";

export function useLogout() {
  const { setToken, setUser } = useContext(AuthContext);
  const naviagate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    setUser(undefined);
    setToken(null);
    localStorage.removeItem("token");
    naviagate("/");
  }

  return logout;
}
