import { useContext } from "react";
import { useLogout } from "../auth/hooks/useLogout";
import Button from "./Button";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function RootLayout() {
  const { user } = useContext(AuthContext);
  const logout = useLogout();

  return (
    <div className="flex flex-col gap-2 items-start">
      {user?.username}
      <Link to="/login">Login</Link>
      <Button size="auto" onClick={logout}>
        Log out
      </Button>
    </div>
  );
}
