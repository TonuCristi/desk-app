import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

import { useFetchUser } from "../../hooks/useFetchUser";

export default function RootLayout() {
  useFetchUser();

  return (
    <div className="m-auto max-w-screen-2xl">
      <div className="px-4 md:px-8">
        <Header />
      </div>

      <main className="px-4 md:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
