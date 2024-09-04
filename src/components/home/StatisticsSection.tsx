const statistics = [
  {
    statistic: "10+",
    statisticName: "Products",
  },
  {
    statistic: "10000+",
    statisticName: "Products sold",
  },
  {
    statistic: "7500+",
    statisticName: "Satisfied costumers",
  },
  {
    statistic: "1st",
    statisticName: "Top 1 in Romania",
  },
];

export default function StatisticsSection() {
  return (
    <section className="flex justify-center px-4 sm:px-8">
      <ul className="grid w-full grid-cols-2 justify-center gap-8 md:flex md:gap-12 lg:gap-16 xl:gap-20">
        {statistics.map(({ statistic, statisticName }) => (
          <li key={statisticName}>
            <h2 className="mb-2 text-3xl font-medium xsm:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl">
              {statistic}
            </h2>
            <p className="text-base text-slate-500 lg:text-xl">
              {statisticName}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
