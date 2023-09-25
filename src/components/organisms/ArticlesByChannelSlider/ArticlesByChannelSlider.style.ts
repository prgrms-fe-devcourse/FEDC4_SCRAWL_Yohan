import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";

export const getCardSliderStyle = (offset: number) => css`
  width: 100%;
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(${offset}, 1fr);

  @media (min-width: ${WIDTH_MAP.sm}px) {
    grid-template-columns: repeat(${offset}, 1fr);
  }

  @media (min-width: ${WIDTH_MAP.md}px) {
    grid-template-columns: repeat(${offset}, 1fr);
  }

  @media (min-width: ${WIDTH_MAP.lg}px) {
    grid-template-columns: repeat(${offset}, 1fr);
  }
`;
