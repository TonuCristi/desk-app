import { useContext } from "react";

import Logo from "../Logo";
import NavLinks from "./NavLinks";
import FavouritesLink from "./FavouritesLink";
import ProfileBadge from "./ProfileBadge";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { COMMON } from "../../../constants/common";

export default function Header() {
  const { token } = useContext(AuthContext);

  return (
    <header className="grid w-full grid-cols-2 items-center gap-8 py-6 lg:grid-cols-3">
      <Link to="/" className="justify-self-start">
        <Logo />
      </Link>

      <div className="hidden justify-self-center lg:block">
        <NavLinks />
      </div>

      <div className="flex items-center gap-4 justify-self-end">
        {token ? (
          <>
            <FavouritesLink />
            <ProfileBadge />
          </>
        ) : (
          <>
            {COMMON.HEADER.AUTH_LINKS.map(({ text, to }) => (
              <Link
                key={text}
                to={`/${to}`}
                className="whitespace-nowrap rounded-full bg-primary px-2.5 py-2 text-secondary"
              >
                {text}
              </Link>
            ))}
          </>
        )}
        <BurgerMenu />
      </div>
    </header>
  );
}
