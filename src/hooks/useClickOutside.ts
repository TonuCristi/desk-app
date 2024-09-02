import { RefObject, useEffect } from "react";

export function useClickOutside(ref: RefObject<HTMLElement>, cb: () => void) {
  useEffect(() => {
    function onClickOutsite(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) cb();
    }

    document.addEventListener("click", onClickOutsite);

    return () => document.removeEventListener("click", onClickOutsite);
  }, [cb, ref]);
}
