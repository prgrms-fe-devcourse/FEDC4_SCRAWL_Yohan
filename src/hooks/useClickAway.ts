import { useEffect, useRef } from "react";

const useClickAway = <T extends HTMLElement = HTMLElement>(
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  const ref = useRef<T | null>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const handleEvent = (e: MouseEvent | TouchEvent) => {
      if (!(e.target instanceof Node)) {
        return;
      }

      if (!element.contains(e.target)) {
        savedHandler.current(e);
      }
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [ref]);

  return ref;
};

export default useClickAway;
