import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import { Card } from "@components/organisms/Card";

import { useArticlesByUserIdQuery } from "@hooks/api/useArticleByUserIdQuery";

type ArticleListProps = {
  userId: string;
  currentChannel: string;
};

const ArticleList = ({ userId, currentChannel }: ArticleListProps) => {
  const { articles } = useArticlesByUserIdQuery(userId);
  return (
    <Flex
      css={css`
        flex-wrap: wrap;
        gap: 20px;
      `}>
      {articles
        ?.filter((article) => article.channel._id === currentChannel)
        .map((article) => (
          <div
            css={css`
              margin-bottom: 20px;
            `}>
            <Card width={271} article={article}></Card>
          </div>
        ))}
    </Flex>
  );
};

export default ArticleList;
