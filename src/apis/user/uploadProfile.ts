import { axiosInstance } from "@apis/axiosInstance";

import { UpdateUserResponse } from "@type/apis/users/UpdateUser";

import { DOMAIN } from "@constants/api";

type Payload = {
  isCover: boolean;
  image: File;
};

export const uploadProfile = async (payload: Payload) => {
  const { data } = await axiosInstance.post<UpdateUserResponse>(
    DOMAIN.UPLOAD_PROFILE,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  return { user: data };
};
