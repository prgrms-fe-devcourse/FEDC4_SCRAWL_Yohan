import { axiosInstance } from "@apis/axiosInstance";

import { AuthUserResponse } from "@type/apis/users/AuthUser";

import { DOMAIN } from "@constants/api";

export const authUser = async () => {
  const { data } = await axiosInstance.get<AuthUserResponse>(DOMAIN.AUTH_USER);
  return data;
};
