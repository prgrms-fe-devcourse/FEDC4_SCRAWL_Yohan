import { Article } from "./Article";
import { Like } from "./Like";
import { Message } from "./Message";
import { Notification } from "./Notification";

export interface User {
  coverImage?: string;
  image?: string;
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: Article[];
  likes: Like[];
  comments: string[];
  followers: [];
  following: [
    {
      _id: string;
      user: string;
      follower: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    }
  ];
  notifications: Notification[];
  messages: Message[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
