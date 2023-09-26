import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createArticle } from "@apis/article/createArticle";

export const useArticleCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createArticle,
    onSuccess: (article) =>
      Promise.all([
        queryClient.resetQueries(["articles", article.channel._id]),
        queryClient.invalidateQueries(["main-articles"]),
        queryClient.invalidateQueries(["user-by-token"])
      ])
  });
};
