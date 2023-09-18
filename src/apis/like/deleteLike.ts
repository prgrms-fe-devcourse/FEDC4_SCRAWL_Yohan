import { axiosInstance } from "@apis/axiosInstance";

import { CreateLikeResponse } from "@type/apis/likes/CreateLike";

import { DOMAIN } from "@constants/api";

export const deleteLike = async (likeId: string) => {
  const { data } = await axiosInstance.delete<CreateLikeResponse>(
    DOMAIN.DELETE_LIKE,
    {
      data: {
        id: likeId
      }
    }
  );

  return data;
};
