import { useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import { HiMiniBars3, HiMiniXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

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

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="empty"
        w="auto"
        className="flex items-center justify-center lg:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <HiMiniBars3 className="text-2xl stroke-1" />
      </Button>

      {isMenuOpen &&
        createPortal(
          <div className="absolute top-0 left-0 h-screen w-full backdrop-blur-xl p-4 xsm:p-8 flex items-center justify-center lg:hidden">
            <nav className="flex flex-col gap-6 w-full xsm:w-3/4 sm:w-2/3 md:w-1/2 bg-slate-950 items-center px-4 py-8 rounded-full">
              <Link to="/">
                <Logo variant="secondary" />
              </Link>

              <ul className="flex flex-col items-center gap-2 text-slate-50">
                {links.map(({ text, to }) => (
                  <li key={text}>
                    <NavLink
                      to={`/${to}`}
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
          </div>,
          document.body
        )}
    </>
  );
}
