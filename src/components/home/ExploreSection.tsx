import { twMerge } from "tailwind-merge";

import Card from "./Card";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../constants/homePage";

const links = [
  {
    type: "square",
    title: "Modarian 1",
    to: "/",
  },
  {
    type: "square",
    title: "Modarian 2",
    to: "/",
  },
  {
    type: "square",
    title: "Modarian 3",
    to: "/",
  },
  {
    type: "rect",
    title: "Modarian 4",
    to: "/",
  },
  {
    type: "rect",
    title: "Modarian 5",
    to: "/",
  },
  {
    type: "rect",
    title: "Modarian 6",
    to: "/",
  },
];

export default function ExploreSection() {
  return (
    <section className="flex flex-col gap-20">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <h2 className="text-center text-4xl font-semibold md:text-5xl xl:text-left xl:text-6xl 2xl:text-7xl">
          {HOME_PAGE.EXPLORE_SECTION.TITLE}
        </h2>

        <div className="flex flex-col-reverse items-center gap-8 xl:flex-col">
          <Link
            to="/about"
            className="rounded-full bg-primary px-8 py-2 text-secondary transition-colors hover:bg-primary-disabled xl:self-end"
          >
            {HOME_PAGE.EXPLORE_SECTION.LINK}
          </Link>
          <p className="w-full text-center md:w-11/12 lg:w-4/5 xl:w-2/3 xl:self-end xl:text-right">
            {HOME_PAGE.EXPLORE_SECTION.DESCRIPTION}
          </p>
        </div>
      </div>

      <div className="grid-rows-auto grid grid-cols-1 gap-4 text-secondary sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {links.map(({ type, title, to }) => (
          <Link
            key={title}
            to={to}
            className={twMerge(
              type === "square" ? "xl:aspect-square" : "xl:aspect-[12/16]",
              "aspect-square overflow-hidden rounded-xl bg-auth bg-cover bg-center",
            )}
          >
            <Card title={title} />
          </Link>
        ))}
      </div>
    </section>
  );
}
