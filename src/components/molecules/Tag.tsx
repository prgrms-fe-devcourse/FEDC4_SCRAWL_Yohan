import { HTMLAttributes } from "react";

import Text from "@components/atoms/Text";

import { useThemeStore } from "@stores/theme.store";

import { Combine } from "@type/Combine";

type TagProps = Combine<
  {
    size: number;
    name: string;
  },
  HTMLAttributes<HTMLElement>
>;

const Tag = ({ size = 12, name, ...props }: TagProps) => {
  const { theme } = useThemeStore();
  const tag = name.replace(/__/g, "");

  return (
    <Text size={size} color={theme.PRIMARY} {...props}>
      #{tag}
    </Text>
  );
};

export default Tag;
