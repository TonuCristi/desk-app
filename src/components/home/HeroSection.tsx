import { Link } from "react-router-dom";

import { HOME_PAGE } from "../../constants/homePage";

export default function HeroSection() {
  return (
    <section className="h-[25rem] overflow-hidden rounded-3xl bg-homeHeroSection bg-cover bg-bottom bg-no-repeat">
      <div className="flex h-full items-center justify-center p-8 backdrop-blur-sm">
        <div className="xs:w-4/5 flex w-full flex-col items-center md:w-3/5 lg:w-1/2">
          <h1 className="mb-2 text-5xl font-semibold text-secondary sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            {HOME_PAGE.HERO_SECTION.TITLE}
          </h1>
          <p className="mb-4 text-center leading-6 text-secondary">
            {HOME_PAGE.HERO_SECTION.DESCRIPTION}
          </p>
          <Link
            to="/about"
            className="rounded-full border-2 border-secondary bg-primary px-8 py-2 text-secondary transition-colors hover:bg-primary-disabled"
          >
            {HOME_PAGE.HERO_SECTION.LINK}
          </Link>
        </div>
      </div>
    </section>
  );
}
