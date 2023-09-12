import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createArticle } from "@apis/article/createArticle";

export const useArticleCreateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createArticle,
    onSuccess: (article) => {
      queryClient.invalidateQueries(["articles", article.channel._id]);
    }
  });
};
