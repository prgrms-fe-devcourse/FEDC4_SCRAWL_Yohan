import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getSearchModalContainerStyle = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 520px;
  height: 470px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: ${theme.BACKGROUND100};
`;

export const searchModalHeaderStyle = css`
  border-bottom: 1px solid var(--border-color);
  padding: 20px;
`;

export const getTooltipStyle = (theme: Theme) => css`
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  background-color: ${theme.BACKGROUND100};
  position: absolute;
  top: -40px;
  left: 0;
  color: ${theme.TEXT300};
`;

export const getSearchOptionBtnStyle = (theme: Theme) => css`
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  color: ${theme.TEXT300};
  :hover {
    background-color: ${theme.BACKGROUND200};
  }
`;
