import { axiosInstance } from "@apis/axiosInstance";

import { LoginResponse } from "@type/apis/users/Login";

import { DOMAIN } from "@constants/api";

type Payload = {
  [key: string]: string;
};

export const login = async (payload: Payload) => {
  const { data } = await axiosInstance.post<LoginResponse>(
    DOMAIN.LOGIN,
    payload,
    {
      useAuth: false
    }
  );
  const token = data.token;
  return token;
};
