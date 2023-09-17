import { HTMLAttributes } from "react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import { IconProps } from "@components/atoms/Icon";
import Text from "@components/atoms/Text";
import { TextProps } from "@components/atoms/Text";

const IconText = ({
  iconValue,
  textValue,
  ...props
}: {
  iconValue: IconProps;
  textValue: TextProps;
} & HTMLAttributes<HTMLDivElement>) => {
  const {
    Svg,
    size: iconSize = 20,
    fill = "#8B8B8B",
    ...iconProps
  } = iconValue;
  const {
    children,
    block,
    paragraph,
    size,
    strong,
    underline,
    delete: del,
    color,
    ...textprops
  } = textValue;

  return (
    <Flex align="center" {...props}>
      <Icon Svg={Svg} size={iconSize} fill={fill} {...iconProps} />
      <Text
        children={children}
        block={block}
        paragraph={paragraph}
        size={size}
        strong={strong}
        underline={underline}
        delete={del}
        color={color}
        css={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
        {...textprops}
      />
    </Flex>
  );
};

export default IconText;
