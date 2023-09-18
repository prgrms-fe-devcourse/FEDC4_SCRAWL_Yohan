import { Comment } from "@type/models/Comment";

export interface CreateCommentRequestBody {
  comment: string;
  postId: string;
}
export type CreateCommentResponse = Comment;
