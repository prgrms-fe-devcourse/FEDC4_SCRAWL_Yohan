import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createComment } from "@apis/comment/createComment";

export const useCommentCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess: (comment) => {
      queryClient.invalidateQueries(["article", comment.post]);
    }
  });
};
