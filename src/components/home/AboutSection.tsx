import Button from "../common/Button";

export default function AboutSection() {
  return (
    <section className="grid lg:w-11/12 w-full sm:w-11/12 md:w-4/5 mx-auto grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <img
        src="/home/home-hero-section-bg.jpg"
        alt="Photo with setup"
        className="aspect-video object-cover lg:aspect-square rounded-3xl"
      />

      <div className="">
        <p className="font-medium mb-2 lg:mb-6">Elegance - Timeless</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-2 lg:mb-4">
          Modern Style
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 lg:mb-8">
          Timeless Charm
        </h2>
        <p className="mb-4 lg:mb-6 leading-7 lg:w-11/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          deleniti ullam quam ea quidem. Facere illum numquam amet culpa fugiat
          adipisci reiciendis, necessitatibus modi debitis.
        </p>
        <Button w="auto" className="px-8">
          About Us
        </Button>
      </div>
    </section>
  );
}
