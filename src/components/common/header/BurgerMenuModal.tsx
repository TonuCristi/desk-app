import { Dispatch, SetStateAction, useEffect } from "react";
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
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center p-4 backdrop-blur-xl xsm:p-8 lg:hidden">
      <nav className="flex w-full flex-col items-center gap-6 rounded-full bg-primary px-4 py-8 xsm:w-3/4 sm:w-2/3 md:w-1/2">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo variant="secondary" />
        </Link>

        <ul className="flex flex-col items-center gap-2 text-secondary">
          {links.map(({ text, to }) => (
            <li key={text}>
              <NavLink
                to={`/${to}`}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  twMerge(
                    isActive && "border-b-2 border-secondary",
                    "border-secondary font-medium hover:border-b-2",
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
        className="absolute right-3 top-3"
        onClick={() => setIsMenuOpen(false)}
      >
        <HiMiniXMark className="stroke-1 text-xl" />
      </Button>
    </div>
  );
}
