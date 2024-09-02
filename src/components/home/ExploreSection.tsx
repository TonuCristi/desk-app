import { Link } from "react-router-dom";
import Button from "../common/Button";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function ExploreSection() {
  return (
    <section className="flex flex-col gap-24">
      <div className="grid grid-cols-2 gap-8">
        <h2 className="text-7xl font-semibold">
          Explore Our Proudly Collection
        </h2>

        <div className="flex flex-col">
          <Button w="auto" className="px-8 self-end mb-8">
            View More
          </Button>
          <p className="text-right w-2/3 self-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quisquam consectetur, aut saepe laboriosam sunt perspiciatis ipsum
            dolorum facere dolorem harum odio obcaecati laborum eius libero.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 text-slate-50">
        <div className="grid grid-rows-[30fr_70fr] gap-8 aspect-[10/16]">
          <Link
            to="/"
            className="bg-auth bg-cover bg-center rounded-xl overflow-hidden"
          >
            <div className="hover:backdrop-blur h-full w-full flex items-end justify-between p-4 transition-all">
              <h3 className="text-3xl font-semibold">Mondrian</h3>
              <Button
                w="auto"
                variant="empty"
                className="bg-slate-50 text-slate-950 text-3xl rounded-full p-1"
              >
                <HiMiniArrowUpRight />
              </Button>
            </div>
          </Link>
          <Link
            to="/"
            className="bg-auth bg-cover bg-center rounded-xl overflow-hidden"
          >
            <div className="hover:backdrop-blur h-full w-full flex items-end justify-between p-4 transition-all">
              <h3 className="text-3xl font-semibold">Mondrian</h3>
              <Button
                w="auto"
                variant="empty"
                className="bg-slate-50 text-slate-950 text-3xl rounded-full p-1"
              >
                <HiMiniArrowUpRight />
              </Button>
            </div>
          </Link>
        </div>
        <div className="grid grid-rows-[70fr_30fr] gap-8">
          <Link
            to="/"
            className="bg-auth bg-cover bg-center rounded-xl overflow-hidden"
          >
            <div className="hover:backdrop-blur h-full w-full flex items-end justify-between p-4 transition-all">
              <h3 className="text-3xl font-semibold">Mondrian</h3>
              <Button
                w="auto"
                variant="empty"
                className="bg-slate-50 text-slate-950 text-3xl rounded-full p-1"
              >
                <HiMiniArrowUpRight />
              </Button>
            </div>
          </Link>
          <Link
            to="/"
            className="bg-auth bg-cover bg-center rounded-xl overflow-hidden"
          >
            <div className="hover:backdrop-blur h-full w-full flex items-end justify-between p-4 transition-all">
              <h3 className="text-3xl font-semibold">Mondrian</h3>
              <Button
                w="auto"
                variant="empty"
                className="bg-slate-50 text-slate-950 text-3xl rounded-full p-1"
              >
                <HiMiniArrowUpRight />
              </Button>
            </div>
          </Link>
        </div>
        <div className="grid grid-rows-[30fr_70fr] gap-8">
          <Link
            to="/"
            className="bg-auth bg-cover bg-center rounded-xl overflow-hidden"
          >
            <div className="hover:backdrop-blur h-full w-full flex items-end justify-between p-4 transition-all">
              <h3 className="text-3xl font-semibold">Mondrian</h3>
              <Button
                w="auto"
                variant="empty"
                className="bg-slate-50 text-slate-950 text-3xl rounded-full p-1"
              >
                <HiMiniArrowUpRight />
              </Button>
            </div>
          </Link>
          <Link
            to="/"
            className="bg-auth bg-cover bg-center rounded-xl overflow-hidden"
          >
            <div className="hover:backdrop-blur h-full w-full flex items-end justify-between p-4 transition-all">
              <h3 className="text-3xl font-semibold">Mondrian</h3>
              <Button
                w="auto"
                variant="empty"
                className="bg-slate-50 text-slate-950 text-3xl rounded-full p-1"
              >
                <HiMiniArrowUpRight />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
