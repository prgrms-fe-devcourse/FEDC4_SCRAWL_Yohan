import { create } from "zustand";

type ViewportState = {
  currentWidth: number;
  setWidth: (value: number) => void;
};

export const useViewportStore = create<ViewportState>((set) => ({
  currentWidth: window.innerWidth,
  setWidth: (value) => set(() => ({ currentWidth: value }))
}));
