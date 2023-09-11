import { css } from "@emotion/react";

import { getLineClampStyle } from "@styles/lineClamp";

export const cardFoorterOuterStyle = css`
  padding: 8px;
  width: calc(100% - 16px);
`;

export const cardDescriptionStyle = css`
  cursor: pointer;
`;

export const titleStyle = css`
  ${getLineClampStyle(1)}
  line-height: 20px;
  margin: 2px;
`;

export const contentStyle = css`
  ${getLineClampStyle(2)}
  line-height: 20px;
`;
