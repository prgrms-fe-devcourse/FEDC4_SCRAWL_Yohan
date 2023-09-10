import { User } from "@type/models/User";

export interface LoginRequestBody {
  authRequired: boolean;
  description: string;
  name: string;
}
export interface LoginResponse {
  user: User;
  token: string;
}
