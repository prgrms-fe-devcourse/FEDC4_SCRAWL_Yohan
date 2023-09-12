import { axiosInstance } from "@apis/axiosInstance";

import { SignupResponse } from "@type/apis/users/Signup";

import { DOMAIN } from "@constants/api";

type Payload = {
  [key: string]: string;
};

export const signUp = async (payload: Payload) => {
  const { data } = await axiosInstance.post<SignupResponse>(
    DOMAIN.SIGNUP,
    payload,
    {
      useAuth: false
    }
  );
  const token = data.token;
  return token;
};
