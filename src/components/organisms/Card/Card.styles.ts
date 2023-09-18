import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getCardOuterStyle = (theme: Theme, width: number) => css`
  width: ${width}px;
  box-shadow: ${theme.SHADOW};
  border-radius: 8px;
  background-color: ${theme.BACKGROUND200};
`;

export const getCardSkeletionOuterStyle = (theme: Theme, width: number) => css`
  width: ${width}px;
  height: ${width * 1.3}px;
  box-shadow: ${theme.SHADOW};
  border-radius: 8px;
  background-color: ${theme.BACKGROUND200};
`;
export const cardImgStyle = css`
  cursor: pointer;
`;

export const userInfoStyle = css`
  margin: 8px 0 0 8px;
  cursor: pointer;
`;
