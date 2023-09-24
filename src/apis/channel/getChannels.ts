import { axiosInstance } from "@apis/axiosInstance";

import { Channels } from "@type/models/Channel";

import { CHANNEL_MAP } from "@constants/channel";

export const getChannels = async () => {
  const { data } = await axiosInstance.get<Channels>("/channels", {
    useAuth: false
  });

  return data.map((channel) => ({
    ...channel,
    name: CHANNEL_MAP[channel._id].title
  }));
};
