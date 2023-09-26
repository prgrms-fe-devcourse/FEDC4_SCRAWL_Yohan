import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";

import { useThemeStore } from "@stores/theme.store";

import { Spinner } from "@assets/svg";

const Spinning = ({ width }: { width: number }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <Flex
      align="center"
      justify="center"
      css={css`
        width: 100%;
        height: 100%;
      `}>
      <Spinner
        stroke={theme.type === "LIGHT" ? "lightgray" : "gray"}
        width={width}
      />
    </Flex>
  );
};

export default Spinning;
