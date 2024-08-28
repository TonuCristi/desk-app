import { Outlet } from "react-router";
import { useFetchUser } from "../../hooks/useFetchUser";
import Header from "./Header";

export default function RootLayout() {
  useFetchUser();

  return (
    <div className="">
      <Header />

      <main className="px-8">
        <Outlet />
      </main>
    </div>
  );
}
