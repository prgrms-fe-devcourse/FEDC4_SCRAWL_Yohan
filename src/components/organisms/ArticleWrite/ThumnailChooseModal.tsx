import { ChangeEventHandler, MouseEventHandler } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Image from "@components/atoms/Image";
import Text from "@components/atoms/Text";

import { useThemeStore } from "@stores/theme.store";

import { NoImage } from "@assets/svg";

type ThumnailChooseModalProps = {
  imageFile: File | null;
  imageUrl: string;
  onImageChange: ChangeEventHandler<HTMLInputElement>;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

const ThumnailChooseModal = ({
  imageFile,
  imageUrl,
  onImageChange,
  onButtonClick
}: ThumnailChooseModalProps) => {
  const theme = useThemeStore((state) => state.theme);

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
        <label htmlFor="uploadImageFile">
          {imageUrl === "" ? (
            <div
              css={css`
                padding: 10px;
                cursor: pointer;
                border: 1px solid ${theme.BORDER100};
              `}>
              <Icon size={150} Svg={NoImage} fill={theme.TEXT600} />
            </div>
          ) : (
            <Image
              css={css`
                cursor: pointer;
                border: 1px solid ${theme.BORDER100};
              `}
              src={imageUrl}
              width={150}
              height={150}
              alt={"이미지를 불러올 수 없습니다."}
              mode="contain"></Image>
          )}
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="uploadImageFile"
          accept="image/*"
          hidden={true}
        />
      </Flex>
      <Button onClick={onButtonClick}>
        {imageFile ? "현재" : "기본"} 썸네일로 글 생성
      </Button>
    </Flex>
  );
};

export default ThumnailChooseModal;
