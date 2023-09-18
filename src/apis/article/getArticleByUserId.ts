import { axiosInstance } from "@apis/axiosInstance";

import { GetArticlesResponse } from "@type/apis/articles/GetArticles";

import { DOMAIN } from "@constants/api";

export const getArticleByUserId = async (
  userId: string,
  offset: number,
  limit: number
) => {
  const { data } = await axiosInstance.get<GetArticlesResponse>(
    DOMAIN.GET_ARTICLE.BY_USER_ID(userId),
    {
      params: { offset, limit }
    }
  );

  return data;
};
