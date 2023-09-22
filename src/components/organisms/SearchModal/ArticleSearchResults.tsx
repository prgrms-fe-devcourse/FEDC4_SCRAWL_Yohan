import { createSearchParams, useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";

import { useSearchArticlesQuery } from "@hooks/api/useSearchArticlesQuery";

import { useThemeStore } from "@stores/theme.store";

import { PATH } from "@constants/index";

import SearchItem from "./SearchItem";

type ArticleSearchResultsProps = {
  keyword: string;
  onClick: () => void;
};

const ArticleSearchResults = ({
  keyword,
  onClick
}: ArticleSearchResultsProps) => {
  const navigate = useNavigate();
  const { articles } = useSearchArticlesQuery(keyword);
  const theme = useThemeStore((state) => state.theme);

  return (
    <Flex
      direction="column"
      gap={10}
      css={css`
        padding: 10px;
      `}>
      {articles.slice(0, 10).map((article) => (
        <SearchItem key={article._id} article={article} onClick={onClick} />
      ))}
      {articles.length > 0 && (
        <Button
          width="100%"
          height="40px"
          background={theme.BACKGROUND200}
          color={theme.TEXT600}
          onClick={() => {
            onClick();
            navigate({
              pathname: PATH.SEARCH,
              search: createSearchParams({
                article: keyword
              }).toString()
            });
          }}>
          자세히 보기
        </Button>
      )}
    </Flex>
  );
};

export default ArticleSearchResults;
