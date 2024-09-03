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
      <ul className="grid grid-cols-2 md:flex gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full justify-center">
        {statistics.map(({ statistic, statisticName }) => (
          <li key={statisticName}>
            <h2 className="text-3xl xsm:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-medium mb-2">
              {statistic}
            </h2>
            <p className="text-base lg:text-xl text-slate-500">
              {statisticName}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
