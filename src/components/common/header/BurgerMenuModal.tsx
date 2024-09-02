import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import { HiMiniXMark } from "react-icons/hi2";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";

const links = [
  {
    text: "Products",
    to: "products",
  },
  {
    text: "About",
    to: "about",
  },
  {
    text: "Contact",
    to: "contact",
  },
];

type Props = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function BurgerMenuModal({ setIsMenuOpen }: Props) {
  return (
    <div className="absolute top-0 left-0 h-screen w-full backdrop-blur-xl p-4 xsm:p-8 flex items-center justify-center lg:hidden">
      <nav className="flex flex-col gap-6 w-full xsm:w-3/4 sm:w-2/3 md:w-1/2 bg-slate-950 items-center px-4 py-8 rounded-full">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo variant="secondary" />
        </Link>

        <ul className="flex flex-col items-center gap-2 text-slate-50">
          {links.map(({ text, to }) => (
            <li key={text}>
              <NavLink
                to={`/${to}`}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  twMerge(
                    isActive && "border-b-2 border-slate-50",
                    "hover:border-b-2 border-slate-50 font-medium"
                  )
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        w="auto"
        className="absolute top-3 right-3"
        onClick={() => setIsMenuOpen(false)}
      >
        <HiMiniXMark className="text-xl stroke-1" />
      </Button>
    </div>
  );
}
