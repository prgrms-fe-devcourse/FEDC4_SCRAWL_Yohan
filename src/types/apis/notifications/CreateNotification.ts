export interface CreateNotificationRequestBody {
  notificationType: "COMMENT" | "FOLLOW" | "LIKE" | "MESSAGE";
  notificationTypeId: string;
  userId: string;
  postId?: string | null;
}
export type CreateNotificationReponse = Notification;
