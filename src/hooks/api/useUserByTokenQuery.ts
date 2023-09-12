import { useQuery } from "@tanstack/react-query";

import { getUserByToken } from "@apis/user/getUserByToken";

export const useUserByTokenQuery = () =>
  useQuery(["user-by-token"], getUserByToken, {
    staleTime: Infinity
  });
