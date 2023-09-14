import { useQuery } from "@tanstack/react-query";

import { getUserByToken } from "@apis/user/getUserByToken";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { AuthError } from "@utils/AuthError";

export const useUserByTokenQuery = () => {
  const { isLoggedIn } = useLoggedIn();

  return useQuery(
    ["user-by-token"],
    async () => {
      if (!isLoggedIn) {
        return null;
      }
      const user = await getUserByToken();
      if (!user) {
        throw new AuthError("유효하지 않은 토큰입니다.");
      }
      return user;
    },
    {
      suspense: true,
      staleTime: Infinity
    }
  );
};
