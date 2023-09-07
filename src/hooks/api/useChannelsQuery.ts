import { useQuery } from "@tanstack/react-query";

import { getChannels } from "@apis/channel/getChannels";

export const useChannelsQuery = () => {
  const { data } = useQuery(["channels"], getChannels, {
    suspense: true,
    useErrorBoundary: true
  });

  return { channels: data! };
};
