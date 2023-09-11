import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ACCESS_TOKEN_KEY } from "@constants/api";

interface TokenState {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

export const useTokenStore = create(
  persist<TokenState, [], [], TokenState>(
    (set) => ({
      accessToken: "",
      setAccessToken: (accessToken) => set({ accessToken })
    }),
    {
      name: ACCESS_TOKEN_KEY
    }
  )
);
