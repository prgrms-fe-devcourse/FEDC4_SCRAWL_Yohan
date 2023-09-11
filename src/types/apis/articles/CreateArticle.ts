export interface CreateArticleRequestBody {
  title: string;
  image?: BinaryData | null;
  channelId: string;
}
