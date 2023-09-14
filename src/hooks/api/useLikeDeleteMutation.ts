import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteLike } from "@apis/like/deleteLike";

export const useLikeDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLike,
    onSuccess: (like) =>
      Promise.all([
        queryClient.invalidateQueries(["article", like.post]),
        queryClient.invalidateQueries(["user-by-token"])
      ])
  });
};
