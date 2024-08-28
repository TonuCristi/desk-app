import clsx from "clsx";
import { useRef, useState } from "react";

import Button from "./Button";
import { HiMiniChevronUp, HiMiniHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";

import { useLogout } from "../auth/hooks/useLogout";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function ProfileBadge() {
  const logout = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <div className="flex items-center gap-4">
      <Link to="/favourites" className="relative">
        <HiMiniHeart className="text-2xl" />
        <div className="absolute text-xs font-semibold bg-red-500 px-1 py-0.5 rounded-full -top-1/2 left-1/3 text-slate-50">
          100
        </div>
      </Link>

      <div ref={containerRef} className="relative text-slate-50">
        <Button
          variant="empty"
          size="auto"
          className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>Tonu Cristian</span>
          <HiMiniChevronUp
            className={clsx(
              isOpen && "rotate-180",
              "text-2xl transition-transform duration-100"
            )}
          />
        </Button>

        {isOpen && (
          <div
            className="overflow-hidden border-2 border-slate-950 absolute w-full rounded-full mt-1"
            onClick={() => setIsOpen(false)}
          >
            <ul className="bg-slate-950 top-full w-full left-0 flex flex-col">
              <li className="hover:bg-slate-50 hover:text-slate-950 transition-colors">
                <Link
                  to="/profile"
                  className="px-2 py-1.5 inline-block w-full text-center"
                >
                  Profile
                </Link>
              </li>
              <li className="hover:bg-slate-50 hover:text-slate-950 transition-colors">
                <Button
                  variant="empty"
                  size="full"
                  className="px-2 py-1.5"
                  onClick={logout}
                >
                  Log out
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
