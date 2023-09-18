import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getSidebarNav = (borderRadius: string, theme: Theme) => css`
  margin: 20px;
  padding: 10px;
  width: 250px;
  flex-grow: 1;
  border: 1px solid var(--border-color);
  border-radius: ${borderRadius};
  background-color: ${theme.BACKGROUND100};
  position: relative;
`;

export const getSidebarLogo = (borderRadius: string, theme: Theme) => css`
  background-color: ${theme.BACKGROUND200};
  margin: -10px -10px;
  padding: 10px;
  border-radius: ${borderRadius} ${borderRadius} 0px 0px;
  border-bottom: 1px solid var(--border-color);
`;

export const sidebarLogo = () => css`
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`;

export const getSidebarIconText = (
  channelMargine: string,
  channelPadding: string,
  borderRadius: string,
  channelGap: string,
  theme: Theme
) => css`
  margin: ${channelMargine};
  padding: ${channelPadding};
  borderradius: ${borderRadius};
  gap: ${channelGap};
  :hover {
    cursor: pointer;
    background: ${theme.BACKGROUND200};
  }
`;

export const getSidebarText = (
  channelMargine: string,
  channelPadding: string
) => css`
  margin: ${channelMargine};
  padding: ${channelPadding};
`;
