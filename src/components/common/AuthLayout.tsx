import { Outlet, useLocation } from "react-router";

import Header from "./header/Header";
import Logo from "./Logo";
import AuthImage from "../auth/common/AuthImage";
import { Link } from "react-router-dom";
import Footer from "./footer/Footer";

export default function AuthLayout() {
  const location = useLocation();

  return location.pathname === "/" ||
    location.pathname === "/products" ||
    location.pathname === "/about" ||
    location.pathname === "/contact" ? (
    <div className="m-auto max-w-screen-2xl">
      <div className="px-4 md:px-8">
        <Header />
      </div>

      <main className="px-4 md:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  ) : (
    <div className="m-auto h-screen max-w-screen-2xl p-8">
      <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="relative flex items-center justify-center">
          <Link to="/" className="absolute left-0 top-0">
            <Logo />
          </Link>

          <Outlet />
        </div>

        <AuthImage />
      </div>
    </div>
  );
}
