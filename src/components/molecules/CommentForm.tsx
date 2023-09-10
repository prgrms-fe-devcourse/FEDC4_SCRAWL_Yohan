import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import Input from "@components/atoms/Input";

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from "@constants/theme";

type CommentFormProps = {
  width: string;
  src: string;
  themeType: "LIGHT" | "DARK";
};

const CommentForm = ({ width, src, themeType }: CommentFormProps) => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      css={css`
        width: ${width};
        height: 144px;
        border-radius: 8px;
        box-shadow: ${themeType === "LIGHT"
          ? LIGHT_MODE_THEME.SHADOW
          : DARK_MODE_THEME.SHADOW};
        background: ${themeType === "LIGHT"
          ? LIGHT_MODE_THEME.BACKGROUND100
          : DARK_MODE_THEME.BACKGROUND100};
      `}>
      <Flex
        justify={"center"}
        align={"center"}
        css={css`
          width: 95%;
          gap: 20px;
          height: 96px;
        `}>
        <Flex
          direction={"column"}
          justify={"start"}
          css={css`
            height: 100%;
          `}>
          <Image
            src={src}
            width={40}
            height={40}
            mode={"cover"}
            css={css`
              border-radius: 50%;
            `}
            alt={"이미지가 없습니다."}
          />
        </Flex>
        <Input
          width={"75%"}
          height={"96px"}
          fontSize={"16px"}
          background={
            themeType === "LIGHT"
              ? LIGHT_MODE_THEME.BACKGROUND100
              : DARK_MODE_THEME.BACKGROUND100
          }
          color={
            themeType === "LIGHT"
              ? LIGHT_MODE_THEME.TEXT600
              : DARK_MODE_THEME.TEXT600
          }
          border={`1px solid ${
            themeType === "LIGHT"
              ? LIGHT_MODE_THEME.BORDER100
              : DARK_MODE_THEME.BORDER100
          }`}
          borderRadius={"8px"}
          type={"text"}
        />
        <Flex
          direction={"column"}
          justify={"end"}
          css={css`
            height: 100%;
          `}>
          <Button
            width={"106px"}
            height={"48px"}
            fontSize={"16px"}
            color={
              themeType === "LIGHT"
                ? LIGHT_MODE_THEME.TEXT100
                : DARK_MODE_THEME.TEXT100
            }
            background={
              themeType === "LIGHT"
                ? LIGHT_MODE_THEME.PRIMARY
                : DARK_MODE_THEME.PRIMARY
            }
            borderRadius={"8px"}>
            REPLY
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CommentForm;
