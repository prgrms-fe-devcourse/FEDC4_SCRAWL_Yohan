import { useQuery } from "@tanstack/react-query";

import { getArticles } from "@apis/article/getArticles";

export const useArticlesQuery = () => {
  const { data } = useQuery(["main-articles"], () => getArticles(), {
    staleTime: 10000,
    suspense: true,
    useErrorBoundary: false
  });

  return { articles: data! };
};
