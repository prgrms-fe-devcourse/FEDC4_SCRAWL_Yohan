import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteArticle } from "@apis/article/deleteArticle";

export const useArticleDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteArticle,
    onSuccess: (article) => {
      queryClient.invalidateQueries(["articles", article.channel._id]);
    }
  });
};
