import { useInfiniteQuery } from "@tanstack/react-query";

import { getArticlesByChannelId } from "@apis/article/getArticlesByChannelId";

const PAGE_LIMIT = 20;

export const useArticlesByChannelIdQuery = (channelId: string) => {
  return useInfiniteQuery(
    ["articles", channelId],
    ({ pageParam = 0 }) =>
      getArticlesByChannelId(channelId, pageParam, PAGE_LIMIT),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === PAGE_LIMIT
          ? allPages.length * PAGE_LIMIT
          : undefined,
      staleTime: 10000,
      suspense: true,
      useErrorBoundary: true
    }
  );
};
