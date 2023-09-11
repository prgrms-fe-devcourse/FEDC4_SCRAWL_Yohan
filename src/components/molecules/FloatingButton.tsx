import Button from "@components/atoms/Button";
import { ButtonProps } from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import { IconProps } from "@components/atoms/Icon";

const FloatingButton = ({
  iconValue,
  buttonValue
}: {
  iconValue: IconProps;
  buttonValue: ButtonProps;
}) => {
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
    borderRadius = "50px"
  } = buttonValue;
  function click() {
    return;
  }
  return (
    <Button
      width={width}
      height={height}
      fontSize={fontSize}
      background={background}
      color={color}
      borderRadius={borderRadius}
      onClick={click}>
      <Flex justify="center">
        <Icon Svg={Svg} size={iconSize} fill={fill} {...iconProps} />
      </Flex>
    </Button>
  );
};

export default FloatingButton;
