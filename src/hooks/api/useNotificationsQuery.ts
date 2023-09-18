import { useQuery } from "@tanstack/react-query";

import { getNotifications } from "@apis/notification/getNotifications";

export const useNotificationsQuery = () => {
  const { data } = useQuery(["notifications"], getNotifications, {
    staleTime: 10000,
    suspense: true
  });

  return { notifications: data! };
};
