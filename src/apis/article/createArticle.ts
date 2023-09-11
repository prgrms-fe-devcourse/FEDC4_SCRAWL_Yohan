import { axiosInstance } from "@apis/axiosInstance";

import { CreateArticleRequestBody } from "@type/apis/articles/CreateArticle";
import { Article } from "@type/models/Article";

import { DOMAIN } from "@constants/api";

export const createArticle = async (article: CreateArticleRequestBody) => {
  const { data } = await axiosInstance.post<Article>(
    DOMAIN.CREATE_ARTICLE,
    article
  );

  return data;
};
