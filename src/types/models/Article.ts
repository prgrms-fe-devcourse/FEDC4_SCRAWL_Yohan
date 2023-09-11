import { Channel } from "./Channel";
import { Like } from "./Like";
import { User } from "./User";

export interface ArticleContent {
  title: string;
  content: string;
  isQuestion: boolean;
  tags: string[];
}

export interface Article {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: ArticleContent;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}
