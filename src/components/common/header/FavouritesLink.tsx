import { HiMiniHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function FavouritesLink() {
  return (
    <Link to="/favourites" className="relative">
      <HiMiniHeart className="text-2xl" />
      <div className="absolute text-xs font-semibold bg-red-500 px-1 py-0.5 rounded-full -top-1/2 left-1/3 text-slate-50">
        100
      </div>
    </Link>
  );
}
