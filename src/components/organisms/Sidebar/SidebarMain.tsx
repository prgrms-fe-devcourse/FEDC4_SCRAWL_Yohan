import { useState } from "react";

import { css } from "@emotion/react";

import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { Theme } from "@constants/theme";

import { Alert, Home, My, Search } from "@assets/svg";

import { NotiDropdown } from "../NotiDropdown";
import { getSidebarIconText, getSidebarText } from "./Sidebar.styles";

type SidebarMainProps = {
  theme: Theme;
  navigatePage: (page: string, channelID?: string) => void;
  channelIconSize: number;
  channelTextSize: number;
  isLoggedIn: boolean;
};
const SidebarMain = ({
  theme,
  navigatePage,
  channelIconSize,
  channelTextSize,
  isLoggedIn
}: SidebarMainProps) => {
  const channelColor = theme.TEXT300;
  const [isNotiDropdownOpen, setIsNotiDropdownOpen] = useState(false);

  return (
    <>
      <Text size={12} css={getSidebarText}>
        MAIN
      </Text>
      <IconText
        iconValue={{
          Svg: Home,
          size: channelIconSize,
          fill: channelColor
        }}
        textValue={{
          children: "홈",
          size: channelTextSize,
          color: channelColor
        }}
        css={getSidebarIconText(theme)}
        onClick={() => navigatePage("HOME")}
      />
      <IconText
        iconValue={{
          Svg: Search,
          size: channelIconSize,
          fill: channelColor
        }}
        textValue={{
          children: "검색",
          size: channelTextSize,
          color: channelColor
        }}
        css={getSidebarIconText(theme)}
      />
      {isLoggedIn && (
        <IconText
          iconValue={{ Svg: My, size: channelIconSize, fill: channelColor }}
          textValue={{
            children: "내 정보",
            size: channelTextSize,
            color: channelColor
          }}
          css={getSidebarIconText(theme)}
          onClick={() => navigatePage("USER")}
        />
      )}
      {isLoggedIn && (
        <div
          css={css`
            position: relative;
          `}>
          <IconText
            iconValue={{
              Svg: Alert,
              size: channelIconSize,
              fill: channelColor
            }}
            textValue={{
              children: "알림",
              size: channelTextSize,
              color: channelColor
            }}
            css={getSidebarIconText(theme)}
            onClick={() => setIsNotiDropdownOpen(true)}
          />
          <NotiDropdown
            visible={isNotiDropdownOpen}
            onClose={() => setIsNotiDropdownOpen(false)}
          />
        </div>
      )}
    </>
  );
};
export default SidebarMain;
