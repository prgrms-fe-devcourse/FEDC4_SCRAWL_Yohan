import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteLike } from "@apis/like/deleteLike";

export const useDeleteLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLike,
    onSuccess: (like) => {
      queryClient.invalidateQueries(["article", like.post]);
    }
  });
};
