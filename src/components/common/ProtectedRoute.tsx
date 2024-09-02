import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import AuthLayout from "./AuthLayout";
import RootLayout from "./RootLayout";
import Loader from "./Loader";

import { AuthContext } from "../../contexts/AuthContext";
import { checkAuthPaths } from "../../utils/checkAuthPaths";
import { checkAppPaths } from "../../utils/checkAppPaths";

export default function ProtectedRoute() {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      (token && checkAuthPaths(location.pathname)) ||
      (!token && checkAppPaths(location.pathname))
    ) {
      navigate("/");
    }
  }, [token, location, navigate]);

  if (
    (token && checkAuthPaths(location.pathname)) ||
    (!token && checkAppPaths(location.pathname))
  )
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader />
      </div>
    );

  return token ? <RootLayout /> : <AuthLayout />;
}
