import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import CardSliderSkeleton from "@components/organisms/ArticlesByChannelSlider/CardSliderSkeleton";

import { useThemeStore } from "@stores/theme.store";

import { CHANNEL_MAP } from "@constants/channel";

const HomePageSkeleton = () => {
  const { theme } = useThemeStore();
  const channelValue = Object.values(CHANNEL_MAP);

  return (
    <Flex
      direction="column"
      css={css`
        margin: 20px 0;
      `}>
      <Flex css={css``} gap={10}>
        <Text size={20} color={theme.PRIMARY} strong={true}>
          최신순
        </Text>
        <Text size={20} color={theme.TEXT300} strong={true}>
          인기순
        </Text>
      </Flex>
      <Flex
        direction="column"
        css={css`
          width: 100%;
          margin-top: 20px;
          margin-left: -36px;
          gap: 20px;
        `}>
        {channelValue.map(({ title }, index) => (
          <CardSliderSkeleton key={index} channelName={title} articles={[]} />
        ))}
      </Flex>
    </Flex>
  );
};

export default HomePageSkeleton;
