import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getNotiDropdownOuterStyle = (theme: Theme) => css`
  border: 1px solid var(--border-color);
  border-radius: 0.4em;
  background-color: ${theme.BACKGROUND100};
  width: 300px;
  height: 400px;
  top: 5px;
  left: 100px;
  box-shadow: ${theme.SHADOW};
  overflow-x: hidden;
`;

export const getReadButtonStyle = (theme: Theme) => css`
  all: unset;
  padding: 5px;
  margin: 5px;
  border-radius: 0.4em;
  cursor: pointer;
  :hover {
    background-color: ${theme.BACKGROUND200};
  }
`;

export const notiDropdownInnerStyle = css`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--border-color);
`;

export const getUserImageStyle = (theme: Theme, seen: boolean) => css`
  border: 1px solid ${seen ? "var(--border-color)" : theme.PRIMARY};
  border-radius: 50%;
`;
