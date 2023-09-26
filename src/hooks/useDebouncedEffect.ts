import { DependencyList, useCallback, useEffect } from "react";

export const useDebouncedEffect = (
  func: () => void,
  delay = 500,
  deps: DependencyList
) => {
  const callback = useCallback(func, [...deps, func]);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
};
