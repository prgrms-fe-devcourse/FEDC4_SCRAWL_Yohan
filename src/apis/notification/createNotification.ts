import { axiosInstance } from "@apis/axiosInstance";

import {
  CreateNotificationReponse,
  CreateNotificationRequestBody
} from "@type/apis/notifications/CreateNotification";

import { DOMAIN } from "@constants/api";

export const createNotification = async (
  notification: CreateNotificationRequestBody
) => {
  const { data } = await axiosInstance.post<CreateNotificationReponse>(
    DOMAIN.CREATE_NOTIFICATION,
    notification
  );

  return data;
};
