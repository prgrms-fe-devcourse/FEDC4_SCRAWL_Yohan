import { useMutation, useQueryClient } from "@tanstack/react-query";

import { readNotifications } from "@apis/notification/readNotifications";

export const useNotificationsReadMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: readNotifications,
    onSuccess: () => queryClient.invalidateQueries(["notifications"])
  });
};
