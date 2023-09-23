import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import { ButtonProps } from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import { IconProps } from "@components/atoms/Icon";

import { useThemeStore } from "@stores/theme.store";

interface FloatingButtonProps extends ButtonProps {
  shadow?: boolean;
}

const FloatingButton = ({
  iconValue,
  buttonValue,
  ...props
}: {
  iconValue: IconProps;
  buttonValue: FloatingButtonProps;
} & HTMLAttributes<HTMLDivElement>) => {
  const {
    Svg,
    size: iconSize = 20,
    fill = "#8B8B8B",
    ...iconProps
  } = iconValue;
  const {
    width = "50px",
    height = "50px",
    fontSize = "14px",
    background = "#ffffff",
    color = "#FFF",
    borderRadius = "50px",
    shadow = true,
    ...buttonProps
  } = buttonValue;
  const { theme } = useThemeStore();
  return (
    <div {...props}>
      <Button
        width={width}
        height={height}
        fontSize={fontSize}
        background={background}
        color={color}
        borderRadius={borderRadius}
        css={css`
          box-shadow: ${shadow && theme.SHADOW};
        `}
        {...buttonProps}>
        <Flex justify="center">
          <Icon Svg={Svg} size={iconSize} fill={fill} {...iconProps} />
        </Flex>
      </Button>
    </div>
  );
};

export default FloatingButton;
