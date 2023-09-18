import { RefObject, useEffect, useState } from "react";

export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  { threshold = 0, root = null, rootMargin = "0%" }: IntersectionObserverInit
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin]);

  return entry;
}
