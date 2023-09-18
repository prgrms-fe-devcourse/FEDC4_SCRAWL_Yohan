import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createArticle } from "@apis/article/createArticle";

export const useArticleCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createArticle,
    onSuccess: (article) =>
      Promise.all([
        queryClient.invalidateQueries(["articles", article.channel._id]),
        queryClient.invalidateQueries(["user-by-token"])
      ])
  });
};
