import { ArticleTitleData } from "@type/models/Article";

export interface UpdateArticleRequestBody {
  postId: string;
  title: ArticleTitleData;
  image?: File | null;
  imageToDeletePublicId?: string;
  channelId: string;
}
