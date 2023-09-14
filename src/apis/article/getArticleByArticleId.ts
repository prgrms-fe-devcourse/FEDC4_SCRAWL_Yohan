import { axiosInstance } from "@apis/axiosInstance";

import { Article } from "@type/models/Article";

import { DOMAIN } from "@constants/api";

export const getArticleByArticleId = async (articleId: string) => {
  const { data } = await axiosInstance.get<Article>(
    DOMAIN.GET_ARTICLE.BY_ARTICLE_ID(articleId),
    {
      useAuth: false
    }
  );

  return data;
};
