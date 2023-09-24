import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Text from "@components/atoms/Text";

import { useThemeStore } from "@stores/theme.store";

import { LogoAlert } from "@assets/svg";

import { emptyAlertStyle } from "./EmptyAlert.styles";

const EmptyAlert = ({ message }: { message: string }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={10}
      css={emptyAlertStyle}>
      <Icon size={70} Svg={LogoAlert} fill={theme.TEXT100} />
      <Text size={24} color={theme.TEXT100}>
        {message}
      </Text>
    </Flex>
  );
};

export default EmptyAlert;
