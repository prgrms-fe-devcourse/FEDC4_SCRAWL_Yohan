import { axiosInstance } from "@apis/axiosInstance";

import { GetArticlesResponse } from "@type/apis/articles/GetArticles";

import { DOMAIN } from "@constants/api";

export const getArticles = async () => {
  const { data } = await axiosInstance.get<GetArticlesResponse>(
    DOMAIN.GET_ARTICLE(""),
    {
      useAuth: false
    }
  );

  return data;
};
