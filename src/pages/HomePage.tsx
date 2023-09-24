import { useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import { ArticlesByChannelSlider } from "@components/organisms/ArticlesByChannelSlider";

import { useArticlesQuery } from "@hooks/api/useArticlesQuery";
import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { useThemeStore } from "@stores/theme.store";

const HomePage = () => {
  const { articles } = useArticlesQuery();
  const { channels } = useChannelsQuery();
  const theme = useThemeStore((state) => state.theme);
  const [sortType, setSortType] = useState<"date" | "like">("date");

  return (
    <Flex
      direction="column"
      css={css`
        margin-top: 20px;
      `}>
      <Flex gap={10}>
        <Text
          css={css`
            cursor: pointer;
          `}
          onClick={() => setSortType("date")}
          size={32}
          color={sortType === "date" ? theme.TEXT600 : theme.TEXT300}
          strong={true}>
          최신순
        </Text>
        <Text
          css={css`
            cursor: pointer;
          `}
          onClick={() => setSortType("like")}
          size={32}
          color={sortType === "like" ? theme.TEXT600 : theme.TEXT300}
          strong={true}>
          인기순
        </Text>
      </Flex>
      <Flex
        direction="column"
        css={css`
          margin-top: 20px;
          gap: 20px;
        `}>
        {channels.map((channel) => (
          <ArticlesByChannelSlider
            key={channel._id}
            channelName={channel.name}
            articles={articles}
            channelId={channel._id}
            sortType={sortType}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default HomePage;
