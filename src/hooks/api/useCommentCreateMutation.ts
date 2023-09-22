import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createComment } from "@apis/comment/createComment";

export const useCommentCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess: (comment) => {
      queryClient.invalidateQueries(["article", comment.post]);
    },
    onError: () => {
      toast.error("댓글을 추가하던 중 오류가 발생하였습니다.");
    }
  });
};
