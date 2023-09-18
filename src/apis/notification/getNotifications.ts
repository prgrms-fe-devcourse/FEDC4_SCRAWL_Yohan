import { axiosInstance } from "@apis/axiosInstance";

import { GetNotificationsResponse } from "@type/apis/notifications/GetNotifications";

import { DOMAIN } from "@constants/api";

export const getNotifications = async () => {
  const { data } = await axiosInstance.get<GetNotificationsResponse>(
    DOMAIN.GET_NOTIFICATIONS
  );

  return data;
};
