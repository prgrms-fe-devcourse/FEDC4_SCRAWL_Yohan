import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser } from "@apis/user/updateUser";

export const useUserUpdateMutation = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      queryClient.invalidateQueries(["articles", userId]);
    },
    onError: () => {
      toast.error("닉네임을 변경하던 중 오류가 발생하였습니다.");
    }
  });
};
