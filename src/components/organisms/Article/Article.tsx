import { useParams } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import CommentForm from "@components/molecules/CommentForm";
import { ArticleHeader } from "@components/organisms/ArticleHeader";
import Thread from "@components/organisms/Thread/Thread";

import { useArticleQuery } from "@hooks/api/useArticleQuery";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { articleTitleDataToArticleContent } from "@type/models/Article";

import { articleOuterStyle } from "./Article.styles";

const Article = () => {
  const { articleId } = useParams();
  const { isLoggedIn } = useLoggedIn();
  if (!articleId) {
    throw new Error("articleId is undefined");
  }

  const { article } = useArticleQuery(articleId);
  const { title, tags } = articleTitleDataToArticleContent(article.title);

  return (
    <Flex direction="column" gap={20} css={articleOuterStyle}>
      <ArticleHeader title={title} tags={tags} article={article} />
      <Thread data={article} />
      {article.comments.map((comment) => (
        <Thread key={comment._id} data={comment} />
      ))}
      {isLoggedIn && (
        <CommentForm width="100%" articleId={articleId}></CommentForm>
      )}
    </Flex>
  );
};

export default Article;
