import { useQuery } from "@tanstack/react-query";

import { searchAll } from "@apis/search/searchAll";

export const useSearchAllQuery = (searchKeyword: string) => {
  const { data } = useQuery(
    ["searchAll", searchKeyword],
    async () => {
      if (searchKeyword === "") {
        return [];
      }
      return searchAll(searchKeyword);
    },
    { staleTime: 10000 }
  );

  return { searchResults: data! };
};
