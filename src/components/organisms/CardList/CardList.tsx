import { Fragment } from "react";

import ErrorBoundary from "@components/_errorBoundaries/ErrorBoundary";
import { Card, CardSkeleton } from "@components/organisms/Card";

import { Article } from "@type/models/Article";

import { cardListStyle } from "./CardList.styles";

const CardList = ({
  articles,
  isFetchingNext,
  channelVisible = false
}: {
  articles?: Article[];
  isFetchingNext?: boolean;
  channelVisible?: boolean;
}) => {
  return (
    <div css={cardListStyle}>
      {articles?.map((article) => (
        <Fragment key={article._id}>
          <ErrorBoundary fallback={null}>
            <Card article={article} channelVisible={channelVisible} />
          </ErrorBoundary>
        </Fragment>
      ))}
      {isFetchingNext &&
        Array(20)
          .fill(null)
          .map((_, i) => <CardSkeleton key={i} />)}
    </div>
  );
};

export default CardList;
