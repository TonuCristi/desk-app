import Button from "../components/common/Button";

export default function HomePage() {
  return (
    <div className="bg-homeHeroSection h-[25rem] rounded-3xl bg-bottom bg-cover bg-no-repeat overflow-hidden">
      <div className="backdrop-blur-md h-full flex items-center justify-center p-8">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-9xl text-slate-50 font-semibold">Aesthetic</h1>
          <p className="text-slate-50 leading-6 font-light text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolores eos consequuntur, excepturi eius quibusdam odit
            pariatur ad minima.
          </p>
          <Button w="auto" className="px-8 border-2 border-slate-50">
            Check products
          </Button>
        </div>
      </div>
    </div>
  );
}
