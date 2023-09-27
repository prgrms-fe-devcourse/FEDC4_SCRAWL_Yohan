import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import { EmptyAlert } from "@components/molecules/EmptyAlert";
import { CardList } from "@components/organisms/CardList";

import { useArticlesByChannelIdQuery } from "@hooks/api/useArticlesByChannelIdQuery";
import { useChannelsQuery } from "@hooks/api/useChannelsQuery";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";
import { useScrollToTop } from "@hooks/useScrollToTop";

import { useThemeStore } from "@stores/theme.store";

import {
  channelPageHeaderStyle,
  channelPageOuterStyle
} from "./ChannelPage.styles";

const ChannelPage = () => {
  const { channelId } = useParams();
  if (!channelId) {
    throw new Error("channelId is undefined");
  }

  const { theme } = useThemeStore();
  const lastElementRef = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1 });

  const { channels } = useChannelsQuery();
  const { data, fetchNextPage, isFetchingNextPage } =
    useArticlesByChannelIdQuery(channelId);

  const channel = channels.find((channel) => channel._id === channelId);
  const articles = data?.pages.reduce(
    (articles, page) => [...articles, ...page],
    []
  );

  useScrollToTop();

  useEffect(() => {
    if (isFetchingNextPage) {
      return;
    }

    if (entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage]);

  return (
    <Flex direction="column" css={channelPageOuterStyle}>
      <Helmet key={location.pathname}>
        <title>{channel?.name}</title>
      </Helmet>
      <Flex align="center" css={channelPageHeaderStyle}>
        <Text size={28} color={theme.TEXT300}>
          채널
        </Text>
        <Text size={32} strong={true}>
          {channel?.name}
        </Text>
      </Flex>
      {articles?.length === 0 && <EmptyAlert message="게시글이 없습니다" />}
      <div
        css={css`
          box-sizing: border-box;
          padding: 20px 20px 0 0;
          width: 100%;
        `}>
        <CardList articles={articles} isFetchingNext={isFetchingNextPage} />
      </div>
      <div ref={lastElementRef} />
    </Flex>
  );
};

export default ChannelPage;
