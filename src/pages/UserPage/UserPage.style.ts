import { css } from "@emotion/react";

import { Channel } from "@type/models/Channel";

import { Theme } from "@constants/theme";

export const getChannelItemStyle = (
  theme: Theme,
  item: Channel,
  currentChannel: string
) => css`
  top: -1px;
  height: 53px;
  cursor: pointer;
  border-top: ${item._id === currentChannel && `1px solid ${theme.TEXT600}`};
  color: ${item._id === currentChannel && theme.TEXT300};
`;
export const getChannelTabStyle = (theme: Theme) => css`
  gap: 20px;
  width: 100%;
  border-top: 1px solid ${theme.BORDER100};
  margin-bottom: 20px;
`;
