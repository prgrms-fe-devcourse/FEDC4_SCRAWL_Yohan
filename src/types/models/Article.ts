import { Channel } from "./Channel";
import { Like } from "./Like";
import { User } from "./User";

export interface Article {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}
