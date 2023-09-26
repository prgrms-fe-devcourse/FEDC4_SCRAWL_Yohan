import { useQuery } from "@tanstack/react-query";

import { getNotifications } from "@apis/notification/getNotifications";

import { filterNotifications } from "@components/organisms/NotiDropdown/filterNotifications";

export const useNotificationsQuery = () => {
  const { data } = useQuery(
    ["notifications"],
    async () => {
      const rawNotifications = await getNotifications();
      return filterNotifications(rawNotifications);
    },
    {
      staleTime: 10000,
      suspense: true
    }
  );

  return { notifications: data! };
};
