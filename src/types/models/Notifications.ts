import { User } from "./User";

export interface Notifications {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post?: string | null;
  follow?: string;
  comment?: Comment;
  message?: string;
  createdAt: string;
  updatedAt: string;
}
