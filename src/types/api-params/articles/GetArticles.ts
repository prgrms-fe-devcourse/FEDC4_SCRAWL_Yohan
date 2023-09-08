import { Article } from "@type/models/Article";

export interface GetArticlesRequest {
  offset?: number;
  limit?: number;
}
export type GetArticlesResponse = Article[];
