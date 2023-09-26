import { useQuery } from "@tanstack/react-query";

import { searchUsers } from "@apis/search/searchUsers";

export const useSearchUsersQuery = (searchKeyword: string) => {
  const { data } = useQuery(
    ["searchUsers", searchKeyword],
    async () => {
      if (searchKeyword === "") {
        return [];
      }
      return searchUsers(searchKeyword);
    },
    { staleTime: 10000 }
  );

  return { users: data! };
};
