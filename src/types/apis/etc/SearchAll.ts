import { Combine } from "@type/Combine";
import { Article } from "@type/models/Article";
import { User } from "@type/models/User";

export type ArticleSearchResult = Combine<
  {
    author: string;
  },
  Article
>;

export type SearchAllResponse = (User | ArticleSearchResult)[];
