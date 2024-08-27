import { Outlet, useLocation } from "react-router";

import Logo from "./Logo";
import AuthImage from "../auth/common/AuthImage";

export default function AuthLayout() {
  const location = useLocation();

  console.log("Merge");

  return location.pathname === "/" ? (
    <div>Guest page</div>
  ) : (
    <div className="h-screen p-8 max-w-screen-2xl m-auto">
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative flex items-center justify-center">
          <div className="absolute top-0 left-0">
            <Logo />
          </div>

          <Outlet />
        </div>

        <AuthImage />
      </div>
    </div>
  );
}
