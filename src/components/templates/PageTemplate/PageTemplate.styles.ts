import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";

export const getPageTemplateWrapperStyle = (sidebarAppearForce: boolean) => css`
  position: relative;
  height: 100vh;
  /* overflow-x: hidden; */
  @media (max-width: ${WIDTH_MAP.sm}px) {
    [class^="css-"][class$="-PageTemplate"] {
      transition: margin-left 0.5s ease-in-out;
      margin-left: 40px;
    }
    [class^="css-"][class$="-FloatingButton"] {
      visibility: ${sidebarAppearForce ? "hidden" : "visible"};
      margin-left: -50px;
    }
  }
  @media (min-width: ${WIDTH_MAP.sm}px) {
    [class^="css-"][class$="-PageTemplate"] {
      transition: margin-left 0.5s ease-in-out;
      margin-left: 330px;
    }
    [class^="css-"][class$="-FloatingButton"] {
      visibility: hidden;
    }
  }
`;

export const pageInnerWrapperStyle = css`
  flex-grow: 1;
  margin-left: 330px;
`;
