import { axiosInstance } from "@apis/axiosInstance";

import { UpdateArticleRequestBody } from "@type/apis/articles/UpdateArticle";
import { Article } from "@type/models/Article";

import { DOMAIN } from "@constants/api";

export const updateArticle = async (article: UpdateArticleRequestBody) => {
  const { data } = await axiosInstance.put<Article>(
    DOMAIN.UPDATE_ARTICLE,
    article,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  return data;
};
