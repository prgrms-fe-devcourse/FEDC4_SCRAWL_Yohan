import { axiosInstance } from "@apis/axiosInstance";

import { CreateLikeResponse } from "@type/apis/likes/CreateLike";

import { DOMAIN } from "@constants/api";

export const deleteLike = async (postId: string) => {
  const { data } = await axiosInstance.delete<CreateLikeResponse>(
    DOMAIN.CREATE_LIKE,
    {
      data: {
        postId
      }
    }
  );

  return data;
};
