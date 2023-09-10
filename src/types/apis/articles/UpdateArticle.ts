export interface UpdateArticleRequestBody {
  postId: string;
  title: string;
  image?: BinaryData | null;
  imageToDeletePublicId?: string;
  channelId: string;
}
