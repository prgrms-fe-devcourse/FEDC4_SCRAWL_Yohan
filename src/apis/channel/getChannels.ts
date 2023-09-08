import { axiosInstance } from "@apis/axiosInstance";

import { Channels } from "@type/models/Channel";

export const getChannels = async () => {
  const { data } = await axiosInstance.get<Channels>("/channels", {
    useAuth: false
  });

  return data;
};
