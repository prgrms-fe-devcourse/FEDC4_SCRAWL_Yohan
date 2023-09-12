import { useQuery } from "@tanstack/react-query";

import { getArticleByArticleId } from "@apis/article/getArticleByArticleId";

export const useArticleByArticlelIdQuery = (articleId: string) => {
  return useQuery(
    ["articles", articleId],
    () => getArticleByArticleId(articleId),
    {
      suspense: true,
      useErrorBoundary: true
    }
  );
};
