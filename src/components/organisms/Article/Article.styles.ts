import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const articleOuterStyle = css`
  min-width: 500px;
  max-width: 1080px;
  margin: 20px 20px 20px 0;
`;

export const getArticleContetnStyle = (theme: Theme) => css`
  width: calc(100% - 20px);
  min-height: 500px;
  border: 1px solid var(--border-color);
  border-radius: 0.4em;
  box-shadow: ${theme.SHADOW};
  padding: 10px;
`;
