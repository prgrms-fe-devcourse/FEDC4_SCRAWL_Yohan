export interface CreateCommentRequestBody {
  comment: string;
  postId: string;
}
export type CreateCommentResponse = Comment;
