import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";

import { useThemeStore } from "@stores/theme.store";

type ConfirmModalProps = {
  message: string;
  subMessage?: string;
  onYesButtonClick: () => void;
  onNoButtonClick: () => void;
};

const ConfirmModal = ({
  message,
  subMessage,
  onYesButtonClick,
  onNoButtonClick
}: ConfirmModalProps) => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap={10}
      css={css`
        box-sizing: border-box;
        padding: 40px;
        width: 320px;
        height: 250px;
        border-radius: 8px;
        background-color: ${theme.BACKGROUND100};
      `}>
      <Text size={18} strong={true}>
        {message}
      </Text>
      <Text
        size={12}
        strong={true}
        color={theme.TEXT100}
        css={css`
          margin-bottom: 20px;
        `}>
        {subMessage}
      </Text>
      <Button width="100%" height="35px" onClick={onYesButtonClick}>
        네
      </Button>
      <Button
        width="100%"
        height="35px"
        background="#ffffff"
        color={theme.TEXT300}
        css={css`
          border: 1px solid ${theme.TEXT300};
        `}
        onClick={onNoButtonClick}>
        아니오
      </Button>
    </Flex>
  );
};

export default ConfirmModal;
