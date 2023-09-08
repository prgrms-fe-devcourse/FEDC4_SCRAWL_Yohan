import { User } from "@type/models/User";

export interface UploadProfileRequest {
  isCover: false;
  image: BinaryData;
}
export type UploadProfileResponse = User;
