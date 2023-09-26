import { css } from "@emotion/react";

import { useThemeStore } from "@stores/theme.store";

import { getCardOuterStyle } from "./Card.styles";

const CardSkeleton = () => {
  const { theme } = useThemeStore();

  return (
    <div css={getCardOuterStyle(theme)}>
      <div
        css={css`
          height: 192px;
        `}></div>
      <div
        css={css`
          width: 100%;
          aspect-ratio: 16 / 10;
        `}
      />
    </div>
  );
};

export default CardSkeleton;
