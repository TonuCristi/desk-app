import { useContext } from "react";

import { Link } from "react-router-dom";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import FavouritesLink from "./FavouritesLink";
import ProfileBadge from "./ProfileBadge";
import BurgerMenu from "./BurgerMenu";

import { AuthContext } from "../../../contexts/AuthContext";

export default function Header() {
  const { token } = useContext(AuthContext);

  return (
    <header className="w-full grid grid-cols-2 lg:grid-cols-3 py-6 gap-8 items-center">
      <Link to="/" className="justify-self-start">
        <Logo />
      </Link>

      <div className="justify-self-center hidden lg:block">
        <NavLinks />
      </div>

      <div className="justify-self-end flex items-center gap-4">
        {token ? (
          <>
            <FavouritesLink />
            <ProfileBadge />
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="rounded-full bg-slate-950 text-slate-50 px-2.5 py-2"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-slate-950 text-slate-50 px-2.5 py-2"
            >
              Sign up
            </Link>
          </>
        )}
        <BurgerMenu />
      </div>
    </header>
  );
}
