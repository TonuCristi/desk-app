import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="h-screen w-full p-8">
      <Outlet />
    </div>
  );
}
