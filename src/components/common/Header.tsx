import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ProfileBadge from "./ProfileBadge";

export default function Header() {
  return (
    <header className="w-full grid grid-cols-3 px-8 py-6 max-w-screen-2xl m-auto gap-8">
      <Link to="/" className="justify-self-start">
        <Logo />
      </Link>

      <div className="justify-self-center">
        <NavLinks />
      </div>

      <div className="justify-self-end">
        <ProfileBadge />
      </div>
    </header>
  );
}
