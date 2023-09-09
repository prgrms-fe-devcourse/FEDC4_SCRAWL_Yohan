import Text from "@components/atoms/Text";

import { useThemeStore } from "@stores/theme.store";

type TagProps = {
  size: number;
  name: string;
};

const Tag = ({ size = 12, name }: TagProps) => {
  const { theme } = useThemeStore();
  const tag = name.replace(/__/g, "");

  return (
    <Text size={size} color={theme.PRIMARY}>
      #{tag}
    </Text>
  );
};

export default Tag;
