import { axiosInstance } from "@apis/axiosInstance";

import {
  CreateCommentRequestBody,
  CreateCommentResponse
} from "@type/apis/comments/CreateComment";

import { DOMAIN } from "@constants/api";

export const createComment = async (requestBody: CreateCommentRequestBody) => {
  const { data } = await axiosInstance.post<CreateCommentResponse>(
    DOMAIN.CREATE_COMMENT,
    requestBody
  );

  return data;
};
