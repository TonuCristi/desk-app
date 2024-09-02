import { twMerge } from "tailwind-merge";

import { NavLink } from "react-router-dom";

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

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-8 ">
        {links.map(({ text, to }) => (
          <li key={text}>
            <NavLink
              to={`/${to}`}
              className={({ isActive }) =>
                twMerge(
                  isActive && "border-b-2 border-slate-950",
                  "hover:border-b-2 border-slate-950 font-medium"
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
