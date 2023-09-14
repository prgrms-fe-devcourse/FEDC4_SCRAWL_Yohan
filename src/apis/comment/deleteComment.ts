import { axiosInstance } from "@apis/axiosInstance";

import {
  DeleteCommentRequestBody,
  DeleteCommentResponse
} from "@type/apis/comments/DeleteComment";

import { DOMAIN } from "@constants/api";

export const deleteComment = async (requestBody: DeleteCommentRequestBody) => {
  const { data } = await axiosInstance.delete<DeleteCommentResponse>(
    DOMAIN.DELETE_COMMENT,
    {
      data: requestBody
    }
  );

  return data;
};
