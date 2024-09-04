import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "../Button";
import { HiMiniChevronUp, HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

import { useLogout } from "../../auth/hooks/useLogout";
import { useClickOutside } from "../../../hooks/useClickOutside";

export default function ProfileBadge() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logout = useLogout();
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <div className="relative">
      <div ref={containerRef} className="text-secondary">
        <Button
          variant="empty"
          w="auto"
          className="flex items-center gap-0.5 rounded-full bg-primary px-4 py-2 md:gap-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <HiMiniUserCircle className="text-2xl" />
          <span className="hidden md:block">Tonu Cristian</span>
          <HiMiniChevronUp
            className={twMerge(
              isOpen && "rotate-180",
              "text-2xl transition-transform duration-100",
            )}
          />
        </Button>

        {isOpen && (
          <div
            className="absolute right-0 top-full z-10 mt-1 w-40 overflow-hidden rounded-full border-2 border-primary md:left-0 md:w-full"
            onClick={() => setIsOpen(false)}
          >
            <ul className="flex w-full flex-col bg-primary">
              <li className="transition-colors hover:bg-secondary hover:text-primary">
                <Link
                  to="/profile"
                  className="inline-block w-full px-2 py-1.5 text-center"
                >
                  Profile
                </Link>
              </li>
              <li className="transition-colors hover:bg-secondary hover:text-primary">
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
