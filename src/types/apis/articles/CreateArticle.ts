import { ArticleTitleData } from "@type/models/Article";

export interface CreateArticleRequestBody {
  title: ArticleTitleData;
  image?: File | null;
  channelId: string;
}
