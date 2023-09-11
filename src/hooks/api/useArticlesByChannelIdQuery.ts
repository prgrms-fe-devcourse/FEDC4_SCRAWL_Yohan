import { useInfiniteQuery } from "@tanstack/react-query";

import { getArticlesByChannelId } from "@apis/article/getArticlesByChannelId";

const pageOffset = 20;

export const useArticlesByChannelIdQuery = (channelId: string) => {
  return useInfiniteQuery(
    ["articles", channelId],
    ({ pageParam }) => getArticlesByChannelId(channelId, pageParam, pageOffset),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === pageOffset ? allPages.length + 1 : undefined,
      suspense: true,
      useErrorBoundary: true
    }
  );
};
