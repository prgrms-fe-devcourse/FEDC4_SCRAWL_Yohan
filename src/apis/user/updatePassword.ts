import { axiosInstance } from "@apis/axiosInstance";

import { UpdateUserResponse } from "@type/apis/users/UpdateUser";

import { DOMAIN } from "@constants/api";

type Payload = {
  [key: string]: string;
};

export const updatePassword = async (payload: Payload) => {
  await axiosInstance.put<UpdateUserResponse>(DOMAIN.UPDATE_PASSWORD, payload);
};
