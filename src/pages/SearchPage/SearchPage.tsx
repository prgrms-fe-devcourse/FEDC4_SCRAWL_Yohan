import { useSearchParams } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import { CardList } from "@components/organisms/CardList";

import { useSearchArticlesQuery } from "@hooks/api/useSearchArticlesQuery";

import { useThemeStore } from "@stores/theme.store";

import {
  searchPageHeaderStyle,
  searchPageOuterStyle
} from "./SearchPage.styles";

const SearchPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const [searchParams] = useSearchParams();
  const [option, keyword] = getSearchMap(searchParams);
  const { articles } = useSearchArticlesQuery(keyword);

  return (
    <Flex direction="column" css={searchPageOuterStyle}>
      <Flex align="center" css={searchPageHeaderStyle}>
        <Text size={28} color={theme.TEXT300}>
          {option}
        </Text>
        <Text size={32} strong={true}>
          {keyword.replace(/__/g, "")}
        </Text>
      </Flex>
      <div
        css={css`
          box-sizing: border-box;
          padding: 20px 20px 0 0;
          width: 100%;
        `}>
        <CardList articles={articles} />
      </div>
    </Flex>
  );
};

export default SearchPage;

const getSearchMap = (searchParams: URLSearchParams): [string, string] => {
  if (searchParams.has("tag")) {
    return ["태그", searchParams.get("tag")!];
  }
  if (searchParams.has("article")) {
    return ["게시글 검색어", searchParams.get("article")!];
  }
  throw new Error("잘못된 주소입니다");
};
