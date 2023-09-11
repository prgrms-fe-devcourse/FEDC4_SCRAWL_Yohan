import { Like } from "@type/models/Like";

export interface CreateLikeRequestBody {
  postId: string;
}
export type CreateLikeResponse = Like;
