export interface CreateCommentRequest {
  comment: string;
  postId: string;
}
export type CreateCommentResponse = Comment;
