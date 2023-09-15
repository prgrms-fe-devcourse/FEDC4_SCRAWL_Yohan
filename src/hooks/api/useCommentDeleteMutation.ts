import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteComment } from "@apis/comment/deleteComment";

export const useCommentDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: (comment) => {
      queryClient.invalidateQueries(["article", comment.post]);
    }
  });
};
