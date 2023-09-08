export interface CreateArticleRequest {
  title: string;
  image?: BinaryData | null;
  channelId: string;
}
