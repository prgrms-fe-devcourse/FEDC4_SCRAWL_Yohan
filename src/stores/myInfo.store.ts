import { create } from "zustand";

import { User } from "@type/models/User";

type MyInfoState = {
  myInfo: User | null;
  setMyinfo: (user: User) => void;
};

export const useMyInfoStore = create<MyInfoState>()((set) => ({
  myInfo: null,
  setMyinfo: (user) => set({ myInfo: user })
}));
