import { Fragment } from "react";
import { useParams } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import Card from "@components/organisms/Card/Card";

import { useArticlesByChannelIdQuery } from "@hooks/api/useArticlesByChannelIdQuery";
import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { useThemeStore } from "@stores/theme.store";

import ErrorBoundary from "@utils/ErrorBoundary";

import {
  cardListStyle,
  channelPageHeaderStyle,
  channelPageOuterStyle
} from "./ChannelPage.styles";

const ChannelPage = () => {
  const { theme } = useThemeStore();
  const { channelId } = useParams();

  if (!channelId) {
    throw new Error("channelId is undefined");
  }

  const { channels } = useChannelsQuery();
  const { data } = useArticlesByChannelIdQuery(channelId);

  const articles = data?.pages.reduce(
    (articles, page) => [...articles, ...page],
    []
  );

  const channel = channels.find((channel) => channel._id === channelId);

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
      <Flex gap={30} css={cardListStyle}>
        {articles?.map((article) => (
          <Fragment key={article._id}>
            <ErrorBoundary fallback={null}>
              <Card article={article} width={300} />
            </ErrorBoundary>
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
};

export default ChannelPage;
