import { CardList } from "@components/organisms/CardList";

import { useArticlesByUserIdQuery } from "@hooks/api/useArticleByUserIdQuery";

type ArticleListProps = {
  userId: string;
  currentChannel: string;
};

const ArticleList = ({ userId, currentChannel }: ArticleListProps) => {
  const { articles: allArticles } = useArticlesByUserIdQuery(userId);
  const articles = allArticles?.filter(
    (article) =>
      currentChannel === "all" || article.channel._id === currentChannel
  );

  return <CardList articles={articles} />;
};

export default ArticleList;
