import { Channel } from "./Channel";
import { Like } from "./Like";
import { User } from "./User";

export interface ArticleContent {
  title: string;
  content: string;
  isQuestion: boolean;
  tags: string[];
}

export type ArticleTitleData = string & { label: "articleTitle" };

export function articleContentToArticleTitleData(
  articleContent: ArticleContent
): ArticleTitleData {
  return JSON.stringify(articleContent) as ArticleTitleData;
}

export function articleTitleDataToArticleContent(
  articletitleData: ArticleTitleData
): ArticleContent {
  return JSON.parse(articletitleData);
}

export interface Article {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: ArticleTitleData;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}
