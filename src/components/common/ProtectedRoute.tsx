import AuthLayout from "./AuthLayout";
import RootLayout from "./RootLayout";

export default function ProtectedRoute() {
  const isLogged = false;

  return isLogged ? <RootLayout /> : <AuthLayout />;
}
