import { HiMiniHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function FavouritesLink() {
  return (
    <Link to="/favourites" className="relative">
      <HiMiniHeart className="text-2xl" />
      <div className="absolute -top-1/2 left-1/3 rounded-full bg-red-500 px-1 py-0.5 text-xs font-semibold text-secondary">
        100
      </div>
    </Link>
  );
}
