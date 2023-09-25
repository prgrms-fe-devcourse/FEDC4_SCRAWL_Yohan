import { useMutation, useQueryClient } from "@tanstack/react-query";

import { uploadProfile } from "@apis/user/uploadProfile";

import { scrawlToast } from "@components/toast";

export const useUserProfileUploadMutation = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: uploadProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      queryClient.invalidateQueries(["articles", userId]);
    },
    onError: () => {
      scrawlToast.error("프로필을 변경하던 중 오류가 발생하였습니다.");
    }
  });
};
