import { ArticleContent } from "@type/models/Article";

export interface CreateArticleRequestBody {
  title: ArticleContent;
  image?: BinaryData | null;
  channelId: string;
}
