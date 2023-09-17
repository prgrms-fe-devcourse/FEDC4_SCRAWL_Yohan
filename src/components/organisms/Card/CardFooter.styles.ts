import { css } from "@emotion/react";

import { getLineClampStyle } from "@styles/lineClamp";

export const cardFoorterOuterStyle = css`
  padding: 8px;
  width: calc(100% - 16px);
`;

export const cardDescriptionStyle = css`
  width: 100%;
  cursor: pointer;
`;

export const titleStyle = css`
  width: 100%;
  ${getLineClampStyle(1)}
  line-height: 20px;
  margin: 2px;
`;

export const contentStyle = css`
  width: 100%;
  ${getLineClampStyle(2)}
  line-height: 20px;
`;

export const tagsHeightStyle = css`
  height: 18px;
`;
