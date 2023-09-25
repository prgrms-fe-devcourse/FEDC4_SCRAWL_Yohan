import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import Flex from "@components/atoms/Flex";

import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { SidebarContext } from "@contexts/sidebar.context";

import { getSidebarNav, getSidebarNavMedia } from "./Sidebar.styles";
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
  const sidebarCtx = useContext(SidebarContext);
  if (!sidebarCtx) throw new Error("sidebarProvider is not founded");
  const { sidebarAppear } = sidebarCtx;

  const navigatePage = (page: string, channelId?: string) => {
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
    <Flex
      direction="column"
      css={css`
        position: fixed;
        height: 100vh;
      `}>
      <nav css={[getSidebarNav(theme), getSidebarNavMedia(sidebarAppear)]}>
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
