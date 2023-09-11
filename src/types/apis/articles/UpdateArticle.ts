import { ArticleTitleData } from "@type/models/Article";

export interface UpdateArticleRequestBody {
  postId: string;
  title: ArticleTitleData;
  image?: BinaryData | null;
  imageToDeletePublicId?: string;
  channelId: string;
}
