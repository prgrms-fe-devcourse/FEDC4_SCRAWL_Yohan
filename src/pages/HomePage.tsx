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
        margin: 20px 0;
      `}>
      <Flex gap={10}>
        <Text
          css={css`
            cursor: pointer;
          `}
          onClick={() => setSortType("date")}
          size={20}
          color={sortType === "date" ? theme.PRIMARY : theme.TEXT300}
          strong={true}>
          최신순
        </Text>
        <Text
          css={css`
            cursor: pointer;
          `}
          onClick={() => setSortType("like")}
          size={20}
          color={sortType === "like" ? theme.PRIMARY : theme.TEXT300}
          strong={true}>
          인기순
        </Text>
      </Flex>
      <Flex
        direction="column"
        css={css`
          margin-top: 20px;
          margin-left: -36px;
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
