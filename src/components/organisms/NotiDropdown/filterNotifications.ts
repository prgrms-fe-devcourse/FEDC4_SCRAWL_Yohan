import { Notification } from "@type/models/Notification";

export const filterNotifications = (notifications: Notification[]) => {
  const result = [];
  const set = new Set<string>();

  for (const notification of notifications) {
    const { seen, like, post, author } = notification;
    if (seen) {
      continue;
    }
    if (like === undefined) {
      result.push(notification);
      continue;
    }

    if (!set.has(`${post}${author._id}`)) {
      set.add(`${post}${author._id}`);
      result.push(notification);
    }
  }
  return result;
};
