import { useTokenStore } from "@stores/token.store";

export const useLoggedIn = () => {
  const accessToken = useTokenStore((state) => state.accessToken);

  return { isLoggedIn: !!accessToken };
};
