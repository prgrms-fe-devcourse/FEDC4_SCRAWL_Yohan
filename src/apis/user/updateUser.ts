import { axiosInstance } from "@apis/axiosInstance";

import { UpdateUserResponse } from "@type/apis/users/UpdateUser";

import { DOMAIN } from "@constants/api";

type Payload = {
  [key: string]: string;
};

export const updateUser = async (payload: Payload) => {
  const { data } = await axiosInstance.put<UpdateUserResponse>(
    DOMAIN.UPDATE_USER,
    payload
  );
  return { user: data };
};
