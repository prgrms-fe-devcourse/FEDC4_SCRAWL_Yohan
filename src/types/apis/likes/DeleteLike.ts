import { Like } from "@type/models/Like";

export interface DeleteLikeRequestBody {
  postId: string;
}
export type DeleteLikeResponse = Like;
