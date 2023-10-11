import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type EditState = {
  edit: { title: string; tags: string[]; content: string };
  setEdit: (value: {
    article_id: string;
    title: string;
    tags: string[];
    content: string;
  }) => void;
};

export const useEditStore = create(
  persist<EditState>(
    (set) => ({
      edit: { article_id: "", title: "", tags: [], content: "" },
      setEdit: (value) => set({ edit: value })
    }),
    {
      name: "edit",
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
