import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";
import { Theme } from "@constants/theme";

const navWidth = "250px";
const textMargine = "15px";
const channelMargine = "4px";
const channelPadding = "10px";
const channelGap = "15px";
const borderRadius = "8px";

export const getSidebar = (sidebarAppear: boolean) => css`
  position: fixed;
  height: 100vh;
  z-index: 2;
  @media (max-width: ${WIDTH_MAP.md}px) {
    transition: transform 0.5s;
    transform: translate(${sidebarAppear ? 0 : -200}%);
    z-index: ${sidebarAppear ? 1 : 0};
  }
  @media (min-width: ${WIDTH_MAP.md}px) {
    transition: transform 0.5s;
    transform: translate(0%);
  }
`;

export const getSidebarNav = (theme: Theme) => css`
  margin: 20px;
  width: ${navWidth};
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  min-height: 531px;
  border: 1px solid var(--border-color);
  border-radius: ${borderRadius};
  background-color: ${theme.BACKGROUND100};
  position: relative;
  z-index: 10;
`;

export const getSidebarLogo = (theme: Theme) => css`
  background-color: ${theme.BACKGROUND200};
  padding: 10px;
  border-radius: ${borderRadius} ${borderRadius} 0px 0px;
  border-bottom: 1px solid var(--border-color);
`;

export const sidebarLogo = css`
  display: inline-block;
  margin-left: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const getSidebarIconText = (theme: Theme) => css`
  margin: ${channelMargine};
  padding: ${channelPadding};
  gap: ${channelGap};
  :hover {
    cursor: pointer;
    background: ${theme.BACKGROUND200};
    border-radius: ${borderRadius};
  }
`;
export const getSelectedSidebarIconText = (theme: Theme) => css`
  margin: ${channelMargine};
  padding: ${channelPadding};
  gap: ${channelGap};
  background: ${theme.BACKGROUND200};
  border-radius: ${borderRadius};
  :hover {
    cursor: pointer;
  }
`;

export const getSidebarText = () => css`
  margin-left: ${textMargine};
`;

export const getSidebarFooter = (theme: Theme) => css`
  background-color: ${theme.BACKGROUND200};
  padding: 25px 0px;
  width: ${navWidth};
  bottom: 0px;
  border-radius: 0px 0px ${borderRadius} ${borderRadius};
  border-top: 1px solid var(--border-color);
`;

export const sidebarChannelLogin = css`
  overflow: auto;
  height: calc(90vh - 420px);
  min-height: 50px;
`;
export const sidebarChannelLogout = css`
  overflow: auto;
  height: calc(90vh - 325px);
  min-height: 150px;
`;
export const getUserInfoStyle = (theme: Theme) => css`
  margin: ${channelMargine};
  padding: ${channelPadding};
  color: ${theme.TEXT300};
  gap: ${channelGap};
  :hover {
    cursor: pointer;
    background: ${theme.BACKGROUND200};
    border-radius: ${borderRadius};
  }
`;
export const getSelectedUserInfoStyle = (theme: Theme) => css`
  margin: ${channelMargine};
  padding: ${channelPadding};
  color: ${theme.TEXT300};
  gap: ${channelGap};
  background: ${theme.BACKGROUND200};
  border-radius: ${borderRadius};
  :hover {
    cursor: pointer;
  }
`;
export const sidebarAppearButton = css`
  position: absolute;
  top: 0px;
  left: 15px;
  z-index: 1;
`;
export const sidebarAppearButtonRtl = css`
  margin-left: 40px;
`;
