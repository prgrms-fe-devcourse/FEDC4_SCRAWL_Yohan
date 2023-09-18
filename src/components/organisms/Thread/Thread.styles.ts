import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getThreadOuterStyle = (theme: Theme) => css`
  position: relative;
  width: 100%;
  box-shadow: ${theme.SHADOW};
  background: ${theme.BACKGROUND100};
  border-radius: 0.4em;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid ${theme.BORDER100};
`;

export const threadInnerStyle = css`
  width: 98%;
  gap: 15px;
`;

export const threadHeaderStyle = css`
  width: 100%;
`;

export const getThreadUserInfoStyle = (theme: Theme) => css`
  font-weight: 600;
  color: ${theme.TEXT600};
`;

export const getThreadDeleteBtnStyle = (isMyComment: boolean) => css`
  visibility: ${isMyComment ? "initial" : "hidden"};
  cursor: pointer;
`;

export const getThreadContentStyle = (theme: Theme) => css`
  font-size: 14px;
  color: ${theme.TEXT600};
`;
