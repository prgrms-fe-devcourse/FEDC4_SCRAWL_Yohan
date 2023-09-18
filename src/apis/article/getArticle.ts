import { axiosInstance } from "@apis/axiosInstance";

import { GetArticleResponse } from "@type/apis/articles/GetArticle";

import { DOMAIN } from "@constants/api";

export const getArticle = async (articleId: string) => {
  const { data } = await axiosInstance.get<GetArticleResponse>(
    DOMAIN.GET_ARTICLE(articleId),
    {
      useAuth: false
    }
  );

  return data;
};
