import { useQuery } from "@tanstack/react-query";

import { getChannels } from "@apis/channel/getChannels";

export const useChannelsQuery = () => {
  const { data } = useQuery(["channels"], getChannels, {
    staleTime: Infinity,
    suspense: true,
    useErrorBoundary: true
  });

  return { channels: data! };
};
