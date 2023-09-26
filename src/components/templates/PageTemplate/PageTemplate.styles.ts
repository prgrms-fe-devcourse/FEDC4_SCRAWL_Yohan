import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";

export const pageTemplateWrapperStyle = css`
  position: relative;
  height: 100vh;
  /* overflow-x: hidden; */
`;

export const pageInnerWrapperStyle = css`
  flex-grow: 1;
  margin-left: 330px;
  margin-top: 10px;
  margin-right: 60px;
  @media (max-width: ${WIDTH_MAP.md}px) {
    transition: margin-left 0.5s ease-in-out;
    margin-left: 20px;
  }
  @media (min-width: ${WIDTH_MAP.md}px) {
    transition: margin-left 0.5s ease-in-out;
    margin-left: 330px;
  }
`;
