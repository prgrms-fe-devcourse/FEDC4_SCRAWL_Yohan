import { create } from "zustand";

type ChannelState = {
  channel: string | undefined;
  setChannel: (value: string | undefined) => void;
};

export const useChannel = create<ChannelState>((set) => ({
  channel: undefined,
  setChannel: (value) => set(() => ({ channel: value }))
}));
