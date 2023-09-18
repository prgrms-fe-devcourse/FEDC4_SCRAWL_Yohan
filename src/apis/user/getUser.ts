import { axiosInstance } from "@apis/axiosInstance";

import { GetUserResponse } from "@type/apis/users/GetUser";

import { DOMAIN } from "@constants/api";

export const getUser = async (userId: string) => {
  const { data } = await axiosInstance.get<GetUserResponse>(
    DOMAIN.GET_USER(userId),
    {
      useAuth: false
    }
  );

  return data;
};
