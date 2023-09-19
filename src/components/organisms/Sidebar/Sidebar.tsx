import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import Flex from "@components/atoms/Flex";

import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { getSidebarNav } from "./Sidebar.styles";
import SidebarChannels from "./SidebarChannels";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarMain from "./SidebarMain";

const channelIconSize = 25;
const channelTextSize = 14;

const Sidebar = () => {
  const { theme } = useThemeStore();
  const { data: user } = useUserByTokenQuery();
  const { isLoggedIn } = useLoggedIn();
  const queryClient = useQueryClient();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const navigate = useNavigate();
  const navigatePage = (page: string, channelId?: string) => {
    switch (page) {
      case "HOME":
        return navigate("/");
      case "USER":
        return navigate(`/users/${user?._id}`);
      case "CHANNEL":
        console.log(channelId);
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
      <nav css={getSidebarNav(theme)}>
        <SidebarHeader theme={theme} navigatePage={navigatePage} />
        <div
          css={css`
            height: calc(100vh - 273px);
            min-height: 300px;
            padding: 5px;
          `}>
          <SidebarMain
            theme={theme}
            navigatePage={navigatePage}
            channelIconSize={channelIconSize}
            channelTextSize={channelTextSize}
            isLoggedIn={isLoggedIn}
          />
          <SidebarChannels
            theme={theme}
            navigatePage={navigatePage}
            channelIconSize={channelIconSize}
            channelTextSize={channelTextSize}
            isLoggedIn={isLoggedIn}
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
