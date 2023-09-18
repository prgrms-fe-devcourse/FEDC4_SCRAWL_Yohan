import { axiosInstance } from "@apis/axiosInstance";

import { CreateLikeResponse } from "@type/apis/likes/CreateLike";

import { DOMAIN } from "@constants/api";

export const createLike = async (postId: string) => {
  const { data } = await axiosInstance.post<CreateLikeResponse>(
    DOMAIN.CREATE_LIKE,
    {
      postId
    }
  );

  return data;
};
