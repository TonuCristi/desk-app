import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section className="bg-homeHeroSection h-[25rem] rounded-3xl bg-bottom bg-cover bg-no-repeat overflow-hidden">
      <div className="backdrop-blur-sm h-full flex items-center justify-center p-8">
        <div className="flex flex-col items-center w-full xs:w-4/5 md:w-3/5 lg:w-1/2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-slate-50 font-semibold mb-2">
            Aesthetic
          </h1>
          <p className="text-slate-50 leading-6 text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolores eos consequuntur, excepturi eius quibusdam odit
            pariatur ad minima.
          </p>
          <Button w="auto" className="px-8 border-2 border-slate-50">
            Check products
          </Button>
        </div>
      </div>
    </section>
  );
}
