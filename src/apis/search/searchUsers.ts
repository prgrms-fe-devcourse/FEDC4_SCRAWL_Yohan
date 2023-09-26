import { axiosInstance } from "@apis/axiosInstance";

import { SearchUsersResponse } from "@type/apis/users/SearchUsers";

import { DOMAIN } from "@constants/api";

export const searchUsers = async (searchKeyword: string) => {
  const { data } = await axiosInstance.get<SearchUsersResponse>(
    DOMAIN.SEARCH_USER(searchKeyword),
    {
      useAuth: false
    }
  );

  return data;
};
