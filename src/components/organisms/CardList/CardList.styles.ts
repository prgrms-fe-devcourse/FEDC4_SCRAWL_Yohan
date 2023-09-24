import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";

const MAX_CARD_WIDTH = 320;

export const cardListStyle = css`
  box-sizing: border-box;
  flex-grow: 1;

  width: 100%;
  max-width: ${MAX_CARD_WIDTH * 2}px;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-auto-rows: max-content;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: ${WIDTH_MAP.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: ${MAX_CARD_WIDTH * 2}px;
  }

  @media (min-width: ${WIDTH_MAP.md}px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: ${MAX_CARD_WIDTH * 3}px;
  }

  @media (min-width: ${WIDTH_MAP.lg}px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: ${MAX_CARD_WIDTH * 4}px;
  }
`;
