import { useQuery } from "@tanstack/react-query";

import { getArticles } from "@apis/article/getArticles";

export const useArticlesQuery = () => {
  const { data } = useQuery(["article"], () => getArticles(), {
    staleTime: 10000,
    suspense: true,
    useErrorBoundary: false
  });

  return { articles: data! };
};
