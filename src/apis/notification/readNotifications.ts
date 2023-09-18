import { axiosInstance } from "@apis/axiosInstance";

import { GetNotificationsResponse } from "@type/apis/notifications/GetNotifications";

import { DOMAIN } from "@constants/api";

export const readNotifications = async () => {
  const { data } = await axiosInstance.put<GetNotificationsResponse>(
    DOMAIN.READ_NOTIFICATION
  );

  return data;
};
