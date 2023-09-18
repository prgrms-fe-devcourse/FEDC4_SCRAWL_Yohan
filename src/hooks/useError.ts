import { useState } from "react";

export const useError = () => {
  const [, set] = useState();

  const throwLazyError = (error: Error) => {
    set(() => {
      throw error;
    });
  };

  return { throwLazyError };
};
