import { User } from "@type/models/User";

export interface GetUsersRequest {
  offset?: number;
  limit?: number;
}
export type GetUsersResponse = User[];
