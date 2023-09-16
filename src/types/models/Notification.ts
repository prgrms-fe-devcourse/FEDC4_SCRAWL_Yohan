import { User } from "./User";

export interface Notification {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post?: string | null;
  follow?: string;
  comment?: Comment;
  message?: string;
  like?: null;
  createdAt: string;
  updatedAt: string;
}
