import { ArticleContent } from "@type/models/Article";

export interface UpdateArticleRequestBody {
  postId: string;
  title: ArticleContent;
  image?: BinaryData | null;
  imageToDeletePublicId?: string;
  channelId: string;
}
