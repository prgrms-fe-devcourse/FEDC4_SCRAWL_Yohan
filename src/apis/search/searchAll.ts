import { axiosInstance } from "@apis/axiosInstance";

import { SearchAllResponse } from "@type/apis/etc/SearchAll";

import { DOMAIN } from "@constants/api";

export const searchAll = async (searchKeyword: string) => {
  const { data } = await axiosInstance.get<SearchAllResponse>(
    DOMAIN.SEARCH_ALL(searchKeyword),
    {
      useAuth: false
    }
  );

  return data;
};
