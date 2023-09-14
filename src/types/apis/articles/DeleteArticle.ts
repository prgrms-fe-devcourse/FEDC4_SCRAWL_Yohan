import { Combine } from "@type/Combine";
import { Article } from "@type/models/Article";

export interface DeleteArticleRequestBody {
  id: string;
}
export type DeleteArticleResponse = Combine<
  {
    likes: string[];
    comments: string[];
    channel: string;
    author: string;
  },
  Article
>;
