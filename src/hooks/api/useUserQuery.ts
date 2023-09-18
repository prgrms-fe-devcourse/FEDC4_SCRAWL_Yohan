import { useQuery } from "@tanstack/react-query";

import { getUser } from "@apis/user/getUser";

export const useUserQuery = (userId: string) => {
  const { data } = useQuery(["user", userId], () => getUser(userId), {
    staleTime: 10000,
    suspense: true,
    useErrorBoundary: true
  });

  return { user: data! };
};
