import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getCardOuterStyle = (theme: Theme) => css`
  width: 100%;
  min-width: 180px;
  box-shadow: ${theme.SHADOW};
  border-radius: 8px;
  background-color: ${theme.BACKGROUND200};
  :hover {
    transform: scale(1.01);
    transition: transform 0.1s ease;
  }
`;

export const cardImgStyle = css`
  width: 100%;
  aspect-ratio: 16 / 10;
  cursor: pointer;
`;

export const userInfoStyle = css`
  margin: 8px 0 0 8px;
  cursor: pointer;
`;
