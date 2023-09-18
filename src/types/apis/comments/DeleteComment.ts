import { Comment } from "@type/models/Comment";

export interface DeleteCommentRequestBody {
  id: string;
}
export type DeleteCommentResponse = Comment;
