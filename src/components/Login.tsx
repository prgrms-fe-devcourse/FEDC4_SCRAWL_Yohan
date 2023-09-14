import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useTokenStore } from "@stores/token.store";

const Login = () => {
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const queryClient = useQueryClient();
  const { isError } = useUserByTokenQuery();

  useEffect(() => {
    if (isError) {
      queryClient.clear();
      setAccessToken(null);
    }
  }, [isError, queryClient, setAccessToken]);

  return null;
};

export default Login;
