import { Link } from "react-router-dom";

import { HOME_PAGE } from "../../constants/homePage";

export default function AboutSection() {
  return (
    <section className="mx-auto grid w-full grid-cols-1 items-center gap-8 sm:w-11/12 md:w-4/5 lg:w-11/12 lg:grid-cols-2">
      <img
        src="/home/home-hero-section-bg.jpg"
        alt="Photo with setup"
        className="aspect-video rounded-3xl object-cover lg:aspect-square"
      />

      <div className="">
        <p className="mb-2 font-medium lg:mb-6">
          {HOME_PAGE.ABOUT_SECTION.SUBTITLE}
        </p>
        <h2 className="mb-2 text-4xl font-semibold lg:mb-4 lg:text-5xl xl:text-6xl">
          {HOME_PAGE.ABOUT_SECTION.TITLE_PRIMARY}
        </h2>
        <h2 className="mb-4 text-4xl font-semibold lg:mb-8 lg:text-5xl xl:text-6xl">
          {HOME_PAGE.ABOUT_SECTION.TITLE_SECONDARY}
        </h2>
        <p className="mb-4 leading-7 lg:mb-6 lg:w-11/12">
          {HOME_PAGE.ABOUT_SECTION.DESCRIPTION}
        </p>
        <Link
          to="/about"
          className="rounded-full bg-primary px-8 py-2 text-secondary transition-colors hover:bg-primary-disabled"
        >
          {HOME_PAGE.ABOUT_SECTION.LINK}
        </Link>
      </div>
    </section>
  );
}
