import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useQueryClient } from "@tanstack/react-query";

import { scrawlToast } from "@components/toast";

import { useTokenStore } from "@stores/token.store";

import { PATH } from "@constants/index";

import { AuthError } from "@utils/AuthError";

type AuthErrorFallbackProps = {
  error: AuthError;
  onMounted: () => void;
};

const AuthErrorFallback = ({ error, onMounted }: AuthErrorFallbackProps) => {
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.clear();
    setAccessToken(null);
    scrawlToast.error(error.message);
    onMounted();
  }, [error, queryClient, setAccessToken, onMounted]);

  return <Navigate to={PATH.LOGIN} />;
};

export default AuthErrorFallback;
