import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateArticle } from "@apis/article/updateArticle";

export const useArticleUpdateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateArticle,
    onSuccess: (article) =>
      Promise.all([
        queryClient.invalidateQueries(["articles", article.channel._id]),
        queryClient.invalidateQueries(["user-by-token"])
      ])
  });
};