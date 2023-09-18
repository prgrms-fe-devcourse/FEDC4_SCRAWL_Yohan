import { User } from "@type/models/User";

export interface UpdateUserRequestBody {
  fullName: string;
  username: string;
}
export type UpdateUserResponse = User;
