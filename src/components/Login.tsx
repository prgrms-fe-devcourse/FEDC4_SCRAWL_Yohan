import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useTokenStore } from "@stores/token.store";

/** 현재 사용되지 않는 컴포넌트 입니다. */
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
