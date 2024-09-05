import { HiMiniArrowUpRight } from "react-icons/hi2";
import Button from "../common/Button";

type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return (
    <div className="flex h-full w-full items-end justify-between p-4 transition-all hover:backdrop-blur">
      <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h3>
      <Button
        w="auto"
        variant="empty"
        className="rounded-full bg-secondary p-1 text-3xl text-primary"
      >
        <HiMiniArrowUpRight />
      </Button>
    </div>
  );
}
