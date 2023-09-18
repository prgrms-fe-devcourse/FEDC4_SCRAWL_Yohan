import { InternalAxiosRequestConfig } from "axios";

import { useTokenStore } from "@stores/token.store";

import { AuthError } from "@utils/AuthError";

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization)
    return config;

  const accessToken = useTokenStore.getState().accessToken;

  if (!accessToken) {
    throw new AuthError("토큰이 존재하지 않습니다");
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};
