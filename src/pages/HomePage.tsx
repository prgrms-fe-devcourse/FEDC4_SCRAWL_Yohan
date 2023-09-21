import { Fragment, useEffect, useRef, useState } from "react";

import ErrorBoundary from "@components/_errorBoundaries/ErrorBoundary";
import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import Card from "@components/organisms/Card/Card";

import { useArticlesQuery } from "@hooks/api/useArticlesQuery";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

import {
  cardListStyle,
  channelPageHeaderStyle,
  channelPageOuterStyle
} from "./ChannelPage/ChannelPage.styles";

const PAGE_LIMIT = 10;

const HomePage = () => {
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1 });
  const [page, setPage] = useState(1);

  const { articles } = useArticlesQuery();
  useEffect(() => {
    if (entry?.isIntersecting) {
      setPage((prevState) => prevState + 1);
    }
  }, [entry?.isIntersecting]);

  return (
    <Flex direction="column" css={channelPageOuterStyle}>
      <Flex align="center" css={channelPageHeaderStyle}>
        <Text size={32} strong={true}>
          최신글
        </Text>
      </Flex>
      <Flex gap={30} css={cardListStyle}>
        {articles
          ?.filter((_, index) => {
            return index < page * PAGE_LIMIT;
          })
          .map((article) => (
            <Fragment key={article._id}>
              <ErrorBoundary fallback={null}>
                <Card article={article} width={300} />
              </ErrorBoundary>
            </Fragment>
          ))}
      </Flex>
      <div ref={lastElementRef} />
    </Flex>
  );
};

export default HomePage;
