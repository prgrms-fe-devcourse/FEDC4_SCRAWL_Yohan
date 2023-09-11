import { User } from "@type/models/User";

export interface UploadProfileRequestBody {
  isCover: false;
  image: BinaryData;
}
export type UploadProfileResponse = User;
