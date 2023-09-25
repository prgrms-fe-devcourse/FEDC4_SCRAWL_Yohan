import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import Flex from "@components/atoms/Flex";

import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";
import { useSidebarContext } from "@hooks/contexts/useSidebarContext";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useViewportStore } from "@stores/resize.store";
import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { WIDTH_MAP } from "@constants/media";

import { getSidebar, getSidebarNav } from "./Sidebar.styles";
import SidebarChannels from "./SidebarChannels";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarMain from "./SidebarMain";

const channelIconSize = 25;
const channelTextSize = 14;

type SidebarProps = {
  outerWidth: number;
};

const Sidebar = ({ outerWidth }: SidebarProps) => {
  const { theme } = useThemeStore();
  const { data: user } = useUserByTokenQuery();
  const { isLoggedIn } = useLoggedIn();
  const queryClient = useQueryClient();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const navigate = useNavigate();
  const myLocation = useLocation().pathname;
  const { sidebarAppear, setSidebarAppear, setSidebarOpenBtnAppear } =
    useSidebarContext();
  const { currentWidth } = useViewportStore();

  useEffect(() => {
    if (WIDTH_MAP.md < currentWidth) {
      setSidebarAppear(false);
      setSidebarOpenBtnAppear(false);
    } else {
      setSidebarOpenBtnAppear(true);
    }
  }, [currentWidth, setSidebarAppear, setSidebarOpenBtnAppear]);

  const navigatePage = (page: string, channelId?: string) => {
    setSidebarAppear(false);
    switch (page) {
      case "HOME":
        return navigate("/");
      case "USER":
        return navigate(`/users/${user?._id}`);
      case "CHANNEL":
        return navigate(`/channels/${channelId}`);
      case "LOGIN":
        return navigate("/login");
      case "LOGOUT":
        setAccessToken(null);
        queryClient.clear();
        return navigate("/");
      default:
        console.log("일치하는 경로가 없습니다.");
    }
  };
  return (
    <Flex direction="column" css={getSidebar(sidebarAppear)}>
      <nav css={getSidebarNav(theme)}>
        <SidebarHeader
          theme={theme}
          navigatePage={navigatePage}
          outerWidth={outerWidth}
        />
        <div
          css={css`
            flex-grow: 1;
            min-height: 300px;
            padding: 5px;
          `}>
          <SidebarMain
            theme={theme}
            navigatePage={navigatePage}
            channelIconSize={channelIconSize}
            channelTextSize={channelTextSize}
            isLoggedIn={isLoggedIn}
            userImage={user?.image}
            userId={user?._id}
            myLocation={myLocation}
          />
          <SidebarChannels
            theme={theme}
            navigatePage={navigatePage}
            channelIconSize={channelIconSize}
            channelTextSize={channelTextSize}
            isLoggedIn={isLoggedIn}
            myLocation={myLocation}
          />
        </div>
        <SidebarFooter
          theme={theme}
          navigatePage={navigatePage}
          isLoggedIn={isLoggedIn}
        />
      </nav>
    </Flex>
  );
};

export default Sidebar;
