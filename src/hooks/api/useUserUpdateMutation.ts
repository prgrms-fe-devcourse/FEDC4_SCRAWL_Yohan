import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser } from "@apis/user/updateUser";

export const useUserUpdateMutation = (userId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", userId]);
      queryClient.invalidateQueries(["articles", userId]);
    }
  });
};
