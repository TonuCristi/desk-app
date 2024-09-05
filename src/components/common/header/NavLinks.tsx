import { twMerge } from "tailwind-merge";

import { NavLink } from "react-router-dom";

import { COMMON } from "../../../constants/common";

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {COMMON.HEADER.NAV_LINKS.map(({ text, to }) => (
          <li key={text}>
            <NavLink
              to={`/${to}`}
              className={({ isActive }) =>
                twMerge(
                  isActive && "border-b-2 border-primary",
                  "border-primary font-medium hover:border-b-2",
                )
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
