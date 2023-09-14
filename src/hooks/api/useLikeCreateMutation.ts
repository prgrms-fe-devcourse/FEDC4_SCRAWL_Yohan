import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createLike } from "@apis/like/createLike";

export const useLikeCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createLike,
    onSuccess: (like) =>
      Promise.all([
        queryClient.invalidateQueries(["article", like.post]),
        queryClient.invalidateQueries(["user-by-token"])
      ])
  });
};
