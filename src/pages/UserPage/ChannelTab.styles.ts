import { css } from "@emotion/react";

export const tabNavbarStyle = css`
  position: relative;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const tabScrollBtnOuterStyle = css`
  cursor: pointer;
  padding: auto;
  height: 55px;
  position: absolute;
  top: 0px;
`;

export const tabScrollBtnStyle = css`
  margin-left: 10px;
`;
