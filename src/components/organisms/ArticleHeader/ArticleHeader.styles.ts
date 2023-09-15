import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const headerStyle = css`
  width: 100%;
`;

export const headerLeftItemStyle = css`
  width: calc(100% - 100px);
`;

export const headerRightItemStyle = css`
  white-space: nowrap;
`;

export const getTextButtonStyle = (theme: Theme, isMe: boolean) => css`
  display: ${isMe ? "initial" : "none"};
  cursor: pointer;
  :hover {
    color: ${theme.TEXT300};
  }
`;

export const getLikeIconTextStyle = (theme: Theme, isMe: boolean) => css`
  pointer-events: ${isMe ? "none" : "initial"};
  cursor: pointer;
  gap: 5px;

  :hover {
    color: ${theme.TEXT300};
  }
`;

export const tagsStyle = css`
  flex-wrap: wrap;
`;
