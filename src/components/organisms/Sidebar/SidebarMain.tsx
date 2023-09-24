import { useState } from "react";

import { css } from "@emotion/react";

import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";
import UserInfo from "@components/molecules/UserInfo";

import { Theme } from "@constants/theme";

import { Alert, Home, Search } from "@assets/svg";
import placeholderUser from "@assets/svg/placeholderUser.svg";

import { NotiDropdown } from "../NotiDropdown";
import { SearchModal } from "../SearchModal";
import {
  getSelectedSidebarIconText,
  getSelectedUserInfoStyle,
  getSidebarIconText,
  getSidebarText,
  getUserInfoStyle
} from "./Sidebar.styles";

type SidebarMainProps = {
  theme: Theme;
  navigatePage: (page: string, channelID?: string) => void;
  channelIconSize: number;
  channelTextSize: number;
  isLoggedIn: boolean;
  userImage: string | undefined;
  myLocation: string;
};
const SidebarMain = ({
  theme,
  navigatePage,
  channelIconSize,
  channelTextSize,
  isLoggedIn,
  userImage,
  myLocation
}: SidebarMainProps) => {
  const channelColor = theme.TEXT300;

  const [isNotiDropdownOpen, setIsNotiDropdownOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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
        css={
          myLocation === "/"
            ? getSelectedSidebarIconText(theme)
            : getSidebarIconText(theme)
        }
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
        onClick={() => setIsSearchModalOpen(true)}
      />
      {isLoggedIn && (
        <UserInfo
          imgWidth={24}
          imageSrc={userImage ? userImage : placeholderUser}
          username="내 정보"
          fontSize={14}
          color={theme.TEXT300}
          css={
            myLocation.includes("users")
              ? getSelectedUserInfoStyle(theme)
              : getUserInfoStyle(theme)
          }
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
      <SearchModal
        visible={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </>
  );
};
export default SidebarMain;
