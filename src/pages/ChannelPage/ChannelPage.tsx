import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import { CardList } from "@components/organisms/CardList";

import { useArticlesByChannelIdQuery } from "@hooks/api/useArticlesByChannelIdQuery";
import { useChannelsQuery } from "@hooks/api/useChannelsQuery";
import { useIntersectionObserver } from "@hooks/useIntersectionObserver";

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
      <Flex align="center" css={channelPageHeaderStyle}>
        <Text size={28} color={theme.TEXT300}>
          채널
        </Text>
        <Text size={32} strong={true}>
          {channel?.name}
        </Text>
      </Flex>
      <CardList articles={articles} isFetchingNext={isFetchingNextPage} />
      <div ref={lastElementRef} />
    </Flex>
  );
};

export default ChannelPage;
