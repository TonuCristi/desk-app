import { Link } from "react-router-dom";

import { COMMON } from "../../../constants/common";

export default function FooterContact() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-20 xl:grid-cols-2 xl:justify-items-start">
      <div className="flex w-11/12 flex-col items-center gap-8 lg:w-4/5 xl:w-full xl:items-start xl:gap-12">
        <h2 className="text-center text-4xl leading-[3rem] sm:text-5xl sm:leading-[4rem] md:text-6xl md:leading-[5rem] lg:text-7xl xl:text-left">
          {COMMON.FOOTER.TITLE}
        </h2>
        <p className="text-center leading-7 xl:text-left">
          {COMMON.FOOTER.DESCRIPTION}
        </p>
        <Link
          to={`/${COMMON.FOOTER.LINK.TO}`}
          className="rounded-full bg-secondary px-8 py-2 text-center text-primary transition-colors hover:bg-secondary-disabled xl:self-start"
        >
          {COMMON.FOOTER.LINK.TEXT}
        </Link>
      </div>
      <img
        src="home/home-hero-section-bg.jpg"
        alt=""
        className="hidden aspect-video w-full rounded-3xl object-cover xl:block"
      />
    </div>
  );
}
