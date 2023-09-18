import { useCallback, useState } from "react";

export const useError = () => {
  const [, set] = useState();

  const dispatchError = useCallback((error: Error) => {
    set(() => {
      throw error;
    });
  }, []);

  return { dispatchError };
};
