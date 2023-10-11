import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CreateState = {
  create: { title: string; tags: string[]; content: string };
  setCreate: (value: {
    title: string;
    tags: string[];
    content: string;
  }) => void;
};

export const useCreatStore = create(
  persist<CreateState>(
    (set) => ({
      create: { title: "", tags: [], content: "" },
      setCreate: (value) => set({ create: value })
    }),
    {
      name: "create",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
