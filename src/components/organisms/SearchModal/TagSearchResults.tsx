import { createSearchParams, useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import { EmptyAlert } from "@components/molecules/EmptyAlert";

import { useSearchArticlesQuery } from "@hooks/api/useSearchArticlesQuery";

import { useThemeStore } from "@stores/theme.store";

import { PATH } from "@constants/index";

import SearchItem from "./SearchItem";

type TagSearchResultsProps = {
  tag: string;
  onClick: () => void;
};

const TagSearchResults = ({ tag, onClick }: TagSearchResultsProps) => {
  const navigate = useNavigate();
  const { articles } = useSearchArticlesQuery(`__${tag}__`);
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
                tag: `__${tag}__`
              }).toString()
            });
          }}>
          자세히 보기
        </Button>
      )}
      {tag && articles.length === 0 && (
        <EmptyAlert message="검색 결과가 없습니다" />
      )}
    </Flex>
  );
};

export default TagSearchResults;
