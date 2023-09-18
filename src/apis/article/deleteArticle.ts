import { axiosInstance } from "@apis/axiosInstance";

import { DeleteArticleResponse } from "@type/apis/articles/DeleteArticle";

import { DOMAIN } from "@constants/api";

export const deleteArticle = async (articleId: string) => {
  const { data } = await axiosInstance.delete<DeleteArticleResponse>(
    DOMAIN.DELETE_ARTICLE,
    {
      data: {
        id: articleId
      }
    }
  );

  return data;
};
