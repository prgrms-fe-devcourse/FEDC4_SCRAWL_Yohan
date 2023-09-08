import { User } from "@type/models/User";

export interface UpdateUserRequest {
  fullName: string;
  username: string;
}
export type UpdateUserResponse = User;
