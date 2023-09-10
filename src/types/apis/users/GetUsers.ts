import { User } from "@type/models/User";

export interface GetUsersRequestParams {
  offset?: number;
  limit?: number;
}
export type GetUsersResponse = User[];
