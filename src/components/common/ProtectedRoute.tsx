import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import AuthLayout from "./AuthLayout";
import RootLayout from "./RootLayout";
import Loader from "./Loader";

import { checkAuthPaths } from "../../utils/checkAuthPaths";
import { checkAppPaths } from "../../utils/checkAppPaths";
import { GlobalContext } from "../../contexts/GlobalContext";
import AuthProvider from "../../contexts/AuthContext";

export default function ProtectedRoute() {
  const { token } = useContext(GlobalContext);
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
      <div className="flex h-screen w-full items-center justify-center">
        <Loader />
      </div>
    );

  return token ? (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  ) : (
    <AuthLayout />
  );
}
