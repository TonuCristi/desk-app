import { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../../contexts/GlobalContext";

export function useLogout() {
  const { setToken } = useContext(GlobalContext);
  const naviagate = useNavigate();

  function logout() {
    setToken(null);
    localStorage.removeItem("token");
    naviagate("/");
  }

  return logout;
}
