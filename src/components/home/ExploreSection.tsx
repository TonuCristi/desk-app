import { twMerge } from "tailwind-merge";

import Card from "./Card";
import { Link } from "react-router-dom";

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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-center xl:text-left">
          Explore Our Proudly Collection
        </h2>

        <div className="flex flex-col-reverse xl:flex-col gap-8 items-center">
          <Link
            to="/about"
            className="bg-slate-950 text-slate-50 px-8 py-2 hover:bg-slate-800 transition-colors rounded-full xl:self-end"
          >
            About Us
          </Link>
          <p className="text-center xl:text-right w-full md:w-11/12 lg:w-4/5 xl:w-2/3 xl:self-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quisquam consectetur, aut saepe laboriosam sunt perspiciatis ipsum
            dolorum facere dolorem harum odio obcaecati laborum eius libero.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 md:gap-8 text-slate-50">
        {links.map(({ type, title, to }) => (
          <Link
            key={title}
            to={to}
            className={twMerge(
              type === "square" ? "xl:aspect-square" : "xl:aspect-[12/16]",
              "bg-auth bg-cover bg-center rounded-xl overflow-hidden aspect-square"
            )}
          >
            <Card title={title} />
          </Link>
        ))}
      </div>
    </section>
  );
}
