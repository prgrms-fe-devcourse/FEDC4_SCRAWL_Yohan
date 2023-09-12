import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const articleOuterStyle = css`
  min-width: 500px;
  max-width: 1000px;
  margin: 20px 20px 0 0;
`;

export const headerStyle = css`
  width: 100%;
`;

export const headerLeftItemStyle = css`
  width: calc(100% - 100px);
`;

export const headerRightItemStyle = css`
  white-space: nowrap;
`;

export const getTextButtonStyle = (theme: Theme) => css`
  cursor: pointer;
  :hover {
    color: ${theme.TEXT300};
  }
`;

export const getLikeIconTextStyle = (theme: Theme) => css`
  cursor: pointer;
  gap: 5px;

  :hover {
    color: ${theme.TEXT300};
  }
`;

export const tagsStyle = css`
  flex-wrap: wrap;
`;

export const getArticleContetnStyle = (theme: Theme) => css`
  width: calc(100% - 20px);
  min-height: 500px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: ${theme.SHADOW};
  padding: 10px;
`;
