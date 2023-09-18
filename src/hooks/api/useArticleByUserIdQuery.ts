import { useInfiniteQuery } from "@tanstack/react-query";

import { getArticleByUserId } from "@apis/article/getArticleByUserId";

const pageOffset = 20;

export const useArticlesByUserIdQuery = (userId: string) => {
  const { data } = useInfiniteQuery(
    ["articles", userId],
    ({ pageParam }) => getArticleByUserId(userId, pageParam, pageOffset),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === pageOffset ? allPages.length + 1 : undefined,
      staleTime: 10000,
      suspense: true,
      useErrorBoundary: true
    }
  );

  const articles = data?.pages.reduce(
    (articles, page) => [...articles, ...page],
    []
  );

  return { articles };
};
