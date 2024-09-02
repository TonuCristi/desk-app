import { Outlet, useLocation } from "react-router";

import Header from "./header/Header";
import Logo from "./Logo";
import AuthImage from "../auth/common/AuthImage";
import { Link } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();

  return location.pathname === "/" ||
    location.pathname === "/products" ||
    location.pathname === "/about" ||
    location.pathname === "/contact" ? (
    <div className="max-w-screen-2xl m-auto">
      <div className="px-4 md:px-8">
        <Header />
      </div>

      <main className="px-4 md:px-8">
        <Outlet />
      </main>
    </div>
  ) : (
    <div className="h-screen p-8 max-w-screen-2xl m-auto">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative flex items-center justify-center">
          <Link to="/" className="absolute top-0 left-0">
            <Logo />
          </Link>

          <Outlet />
        </div>

        <AuthImage />
      </div>
    </div>
  );
}
