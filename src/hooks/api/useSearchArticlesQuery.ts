import { useQuery } from "@tanstack/react-query";

import { searchArticles } from "@apis/search/searchArticles";

export const useSearchArticlesQuery = (searchKeyword: string) => {
  const { data } = useQuery(
    ["searchArticles", searchKeyword],
    async () => {
      if (searchKeyword === "") {
        return [];
      }
      return searchArticles(searchKeyword);
    },
    { staleTime: 10000 }
  );

  return { articles: data! };
};
