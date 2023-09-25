import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";

import { useThemeStore } from "@stores/theme.store";

type ThumnailChooseModalProps = {
  thumnailUrl: string;
  imageUrls: string[];
  onImageClick: (imageUrl: string) => void;
  onButtonClick: () => void;
};

const ThumnailChooseModal = ({
  thumnailUrl,
  imageUrls,
  onImageClick,
  onButtonClick
}: ThumnailChooseModalProps) => {
  const theme = useThemeStore((state) => state.theme);

  if (imageUrls.length === 0) {
    return (
      <Flex
        direction="column"
        justify="center"
        align="center"
        gap={10}
        css={css`
          box-sizing: border-box;
          padding: 24px;
          width: 320px;
          height: 400px;
          border-radius: 8px;
          background-color: ${theme.BACKGROUND100};
        `}>
        <Button onClick={onButtonClick}>기본 썸네일로 글 생성</Button>
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      justify="space-around"
      align="center"
      gap={10}
      css={css`
        box-sizing: border-box;
        padding: 24px;
        width: 320px;
        height: 400px;
        border-radius: 8px;
        background-color: ${theme.BACKGROUND100};
      `}>
      <Text size={18} strong={true}>
        썸네일을 선택해주세요.
      </Text>
      <Flex justify="center" align="center" gap={20}>
        {imageUrls.map((imageUrl) => (
          <img
            css={css`
              width: 30%;
              border: 3px solid
                ${thumnailUrl === imageUrl ? theme.PRIMARY : theme.BORDER100};
            `}
            onClick={() => onImageClick(imageUrl)}
            src={imageUrl}
          />
        ))}
      </Flex>
      <Button onClick={onButtonClick}>현재 썸네일로 글 생성</Button>
    </Flex>
  );
};

export default ThumnailChooseModal;
