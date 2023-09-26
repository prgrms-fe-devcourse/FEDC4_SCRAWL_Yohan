import { css } from "@emotion/react";

export const getFloatingButtonLocation = (width: number) => css`
  position: fixed;
  right: 10px;
  bottom: 10px;

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${width + 120}px) {
    right: calc(100% - ${width + 120}px);
  }
`;
