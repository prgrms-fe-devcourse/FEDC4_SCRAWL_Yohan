import { Article } from "@type/models/Article";

export interface GetArticlesRequestParams {
  offset?: number;
  limit?: number;
}
export type GetArticlesResponse = Article[];
