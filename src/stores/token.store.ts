import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ACCESS_TOKEN_KEY } from "@constants/api";

interface TokenState {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
}

export const useTokenStore = create(
  persist<TokenState, [], [], TokenState>(
    (set) => ({
      accessToken: null,
      setAccessToken: (accessToken) => set({ accessToken })
    }),
    {
      name: ACCESS_TOKEN_KEY
    }
  )
);
