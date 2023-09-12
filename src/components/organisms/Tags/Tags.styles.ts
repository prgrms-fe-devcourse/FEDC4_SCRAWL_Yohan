import { css } from "@emotion/react";

export const tagsContainerStyle = css`
  width: calc(100% - 16px);
  overflow: hidden;
`;

export const tagStyle = css`
  cursor: pointer;
  :hover {
    filter: brightness(1.3);
  }
`;
