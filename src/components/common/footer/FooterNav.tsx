import Logo from "../Logo";
import { Link } from "react-router-dom";

import { COMMON } from "../../../constants/common";

export default function FooterNav() {
  return (
    <nav className="grid grid-cols-1 justify-items-center gap-20 xl:grid-cols-[60fr_40fr]">
      <ul className="flex w-11/12 flex-col justify-between gap-6 sm:flex-row md:w-4/5 xl:w-full">
        {COMMON.FOOTER.LINKS.map(({ title, list }) => (
          <li key={title}>
            <h3 className="mb-2 text-lg">{title}</h3>
            <ul className="flex flex-col gap-1">
              {list.map(({ text, to }) => (
                <li key={text}>
                  <Link
                    to={to}
                    className="font-light text-gray-400 transition-colors hover:text-secondary"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link to="/" className="hidden self-end justify-self-end xl:block">
        <Logo variant="empty" className="text-7xl" />
      </Link>
    </nav>
  );
}
