import { useContext, useEffect } from "react";

import AuthLayout from "./AuthLayout";
import RootLayout from "./RootLayout";

import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";

export default function ProtectedRoute() {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && location.pathname !== "/") {
      navigate("/");
    }
  }, [token, location, navigate]);

  return token ? <RootLayout /> : <AuthLayout />;
}
