import { User } from "@type/models/User";

export interface SignupRequest {
  email: string;
  fullName: string;
  password: string;
}
export interface SignupResponse {
  user: User;
  token: string;
}
