import { ArticleTitleData } from "@type/models/Article";

export interface CreateArticleRequestBody {
  title: ArticleTitleData;
  image?: BinaryData | null;
  channelId: string;
}
