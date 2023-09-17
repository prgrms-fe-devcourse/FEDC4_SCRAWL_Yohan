import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import { ButtonProps } from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import { IconProps } from "@components/atoms/Icon";

import { useThemeStore } from "@stores/theme.store";

const FloatingButton = ({
  iconValue,
  buttonValue,
  ...props
}: {
  iconValue: IconProps;
  buttonValue: ButtonProps;
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
    ...buttonProps
  } = buttonValue;
  const { theme } = useThemeStore();
  function click() {
    return;
  }
  return (
    <div {...props}>
      <Button
        width={width}
        height={height}
        fontSize={fontSize}
        background={background}
        color={color}
        borderRadius={borderRadius}
        onClick={click}
        css={css`
          box-shadow: ${theme.SHADOW};
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
