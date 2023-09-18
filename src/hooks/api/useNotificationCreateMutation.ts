import { useMutation } from "@tanstack/react-query";

import { createNotification } from "@apis/notification/createNotification";

export const useNotificationCreateMutation = () => {
  return useMutation({
    mutationFn: createNotification
  });
};
