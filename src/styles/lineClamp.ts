import { css } from "@emotion/react";

export const getLineClampStyle = (clamp: number) => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${clamp};
`;
