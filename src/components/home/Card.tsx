import { HiMiniArrowUpRight } from "react-icons/hi2";
import Button from "../common/Button";

type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return (
    <div className="hover:backdrop-blur h-full w-full flex items-end justify-between p-4 transition-all">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{title}</h3>
      <Button
        w="auto"
        variant="empty"
        className="bg-slate-50 text-slate-950 text-3xl rounded-full p-1"
      >
        <HiMiniArrowUpRight />
      </Button>
    </div>
  );
}
