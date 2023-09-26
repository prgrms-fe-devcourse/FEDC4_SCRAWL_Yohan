import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import Text from "@components/atoms/Text";

import { getLineClampStyle } from "@styles/lineClamp";

import { useThemeStore } from "@stores/theme.store";

import { Combine } from "@type/Combine";

type UserInfoProps = Combine<
  {
    imageSrc: string;
    imgWidth: number;
    username: string;
    fontSize: number;
    gap?: number;
    color?: string;
  },
  HTMLAttributes<HTMLDivElement>
>;

const UserInfo = ({
  imageSrc,
  imgWidth,
  username,
  fontSize,
  gap = 5,
  color,
  ...props
}: UserInfoProps) => {
  const { theme } = useThemeStore();

  return (
    <Flex align="center" gap={gap} {...props}>
      <Image
        src={imageSrc}
        width={imgWidth}
        height={imgWidth}
        alt="profile"
        mode="cover"
        css={css`
          border: 1px solid ${theme.BORDER100};
          border-radius: 50%;
        `}
      />
      <Text size={fontSize} color={color} css={getLineClampStyle(1)}>
        {username}
      </Text>
    </Flex>
  );
};

export default UserInfo;
