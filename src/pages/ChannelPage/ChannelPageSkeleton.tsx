import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import { CardSkeleton } from "@components/organisms/Card";

import { useThemeStore } from "@stores/theme.store";

import {
  cardListStyle,
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
      <Flex gap={30} css={cardListStyle}>
        {Array(20)
          .fill(null)
          .map((_, i) => (
            <CardSkeleton key={i} width={300} />
          ))}
      </Flex>
    </Flex>
  );
};

export default ChannelPageSkeleton;
