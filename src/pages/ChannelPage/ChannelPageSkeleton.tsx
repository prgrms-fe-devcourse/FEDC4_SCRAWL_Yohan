import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import { CardList } from "@components/organisms/CardList";

import { useThemeStore } from "@stores/theme.store";

import {
  channelPageHeaderStyle,
  channelPageOuterStyle
} from "./ChannelPage.styles";

const ChannelPageSkeleton = () => {
  const { theme } = useThemeStore();

  return (
    <Flex direction="column" css={channelPageOuterStyle}>
      <Flex align="center" css={channelPageHeaderStyle}>
        <Text size={28} color={theme.TEXT300}>
          채널
        </Text>
      </Flex>
      <div
        css={css`
          box-sizing: border-box;
          padding: 20px 20px 0 0;
          width: 100%;
        `}>
        <CardList isFetchingNext={true} />
      </div>
    </Flex>
  );
};

export default ChannelPageSkeleton;
