import { Outlet } from "react-router";
import Header from "./Header";

import { useFetchUser } from "../../hooks/useFetchUser";

export default function RootLayout() {
  useFetchUser();

  return (
    <div>
      <Header />

      <main className="px-4 md:px-8">
        <Outlet />
      </main>
    </div>
  );
}
