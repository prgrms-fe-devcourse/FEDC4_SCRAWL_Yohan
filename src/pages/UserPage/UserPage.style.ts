import { css } from "@emotion/react";

import { Channel } from "@type/models/Channel";

import { Theme } from "@constants/theme";

export const getChannelItemStyle = (
  theme: Theme,
  item: Channel,
  currentChannel: string
) => css`
  position: relative;
  top: -1px;
  height: 53px;
  cursor: pointer;
  z-index: 999;
  border-top: ${item._id === currentChannel && `1px solid ${theme.TEXT600}`};
  color: ${item._id === currentChannel && theme.TEXT300};
`;
export const getChannelTabStyle = (theme: Theme) => css`
  position: relative;
  gap: 20px;
  width: 100%;
  border-top: 1px solid ${theme.BORDER100};
  z-index: 1;
  margin-bottom: 20px;
`;
