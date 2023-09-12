import { axiosInstance } from "@apis/axiosInstance";

import { User } from "@type/models/User";

import { DOMAIN } from "@constants/api";

export const getUserByToken = async () => {
  const { data } = await axiosInstance.get<User | "">(DOMAIN.AUTH_USER);

  return data;
};
