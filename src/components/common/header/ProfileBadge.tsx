import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "../Button";
import { HiMiniChevronUp, HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

import { useLogout } from "../../auth/hooks/useLogout";
import { useClickOutside } from "../../../hooks/useClickOutside";

export default function ProfileBadge() {
  const logout = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <div className="relative">
      <div ref={containerRef} className="text-slate-50">
        <Button
          variant="empty"
          w="auto"
          className="flex items-center gap-0.5 md:gap-2 bg-slate-950 px-4 py-2 rounded-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HiMiniUserCircle className="text-2xl" />
          <span className="hidden md:block">Tonu Cristian</span>
          <HiMiniChevronUp
            className={twMerge(
              isOpen && "rotate-180",
              "text-2xl transition-transform duration-100"
            )}
          />
        </Button>

        {isOpen && (
          <div
            className="overflow-hidden border-2 border-slate-950 absolute rounded-full mt-1 md:w-full top-full md:left-0 right-0 w-40"
            onClick={() => setIsOpen(false)}
          >
            <ul className="bg-slate-950 w-full flex flex-col">
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
                  w="full"
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
