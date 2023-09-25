import { useChannelsQuery } from "./api/useChannelsQuery";

export const useChannelName = (id: string) => {
  const { channels } = useChannelsQuery();
  return channels.find((channel) => channel._id === id)?.name;
};
