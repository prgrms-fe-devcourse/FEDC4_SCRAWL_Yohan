import { Like } from "./Like";
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
  like?: Like;
  createdAt: string;
  updatedAt: string;
}
