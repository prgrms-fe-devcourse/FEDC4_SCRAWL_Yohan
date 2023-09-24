import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";

const MAX_CARD_WIDTH = 320;

export const getCardSliderStyle = (offset: number) => css`
  width: 100%;
  display: grid;
  gap: 20px;
  max-width: ${MAX_CARD_WIDTH * offset}px;

  grid-template-columns: repeat(${offset}, 1fr);

  @media (min-width: ${WIDTH_MAP.sm}px) {
    grid-template-columns: repeat(${offset}, 1fr);
    max-width: ${MAX_CARD_WIDTH * offset}px;
  }

  @media (min-width: ${WIDTH_MAP.md}px) {
    grid-template-columns: repeat(${offset}, 1fr);
    max-width: ${MAX_CARD_WIDTH * offset}px;
  }

  @media (min-width: ${WIDTH_MAP.lg}px) {
    grid-template-columns: repeat(${offset}, 1fr);
    max-width: ${MAX_CARD_WIDTH * offset}px;
  }
`;
