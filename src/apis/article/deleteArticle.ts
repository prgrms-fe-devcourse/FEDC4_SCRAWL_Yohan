import { axiosInstance } from "@apis/axiosInstance";

import { Article } from "@type/models/Article";

import { DOMAIN } from "@constants/api";

export const deleteArticle = async (articleId: string) => {
  const { data } = await axiosInstance.delete<Article>(DOMAIN.DELETE_ARTICLE, {
    data: {
      id: articleId
    }
  });

  return data;
};
