import { axiosInstance } from "@apis/axiosInstance";

import { GetArticlesResponse } from "@type/apis/articles/GetArticles";

import { DOMAIN } from "@constants/api";

export const getArticlesByChannelId = async (
  channelId: string,
  offset: number,
  limit: number
) => {
  const { data } = await axiosInstance.get<GetArticlesResponse>(
    DOMAIN.GET_ARTICLES.BY_CHANNEL_ID(channelId),
    {
      params: { offset, limit },
      useAuth: false
    }
  );

  return data;
};
