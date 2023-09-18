import { useQuery } from "@tanstack/react-query";

import { getArticle } from "@apis/article/getArticle";

export const useArticleQuery = (articleId: string) => {
  const { data } = useQuery(
    ["article", articleId],
    () => getArticle(articleId),
    {
      staleTime: 10000,
      suspense: true,
      useErrorBoundary: true
    }
  );

  return { article: data! };
};
