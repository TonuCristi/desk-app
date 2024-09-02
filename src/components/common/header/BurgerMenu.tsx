import { useState } from "react";
import { createPortal } from "react-dom";

import { HiMiniBars3 } from "react-icons/hi2";
import Button from "../Button";
import BurgerMenuModal from "./BurgerMenuModal";

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="empty"
        w="auto"
        className="flex items-center justify-center lg:hidden"
        onClick={() => setIsMenuOpen(true)}
      >
        <HiMiniBars3 className="text-2xl stroke-1" />
      </Button>

      {isMenuOpen &&
        createPortal(
          <BurgerMenuModal setIsMenuOpen={setIsMenuOpen} />,
          document.body
        )}
    </>
  );
}
