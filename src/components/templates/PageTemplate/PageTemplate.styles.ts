import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";

export const pageTemplateWrapperStyle = css`
  position: relative;
  height: 100vh;
  /* overflow-x: hidden; */
`;

export const pageInnerWrapperStyle = css`
  flex-grow: 1;

  @media (max-width: ${WIDTH_MAP.sm}px) {
    transition: transform 0.5s;
    transform: translate(10px);
  }
  @media (min-width: ${WIDTH_MAP.sm}px) {
    transition: transform 0.5s;
    transform: translate(330px);
  }
`;
