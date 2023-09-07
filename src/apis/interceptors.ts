import { InternalAxiosRequestConfig } from "axios";

import { ACCESS_TOKEN_KEY } from "@constants/api";

export const setAuthorization = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization)
    return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!accessToken) {
    throw new Error("토큰이 존재하지 않습니다");
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
};
