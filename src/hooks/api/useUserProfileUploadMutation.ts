import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadProfile } from "@apis/user/uploadProfile";

export const useUserProfileUploadMutation = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      queryClient.invalidateQueries(["articles", userId]);
    }
  });
};
