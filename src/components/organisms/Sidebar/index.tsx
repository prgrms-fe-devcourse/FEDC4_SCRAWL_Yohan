import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { Logo } from "@assets/svg";
import { Alert, Folder, Home, My, Question, Search } from "@assets/svg";

import {
  getSidebarIconText,
  getSidebarLogo,
  getSidebarNav,
  getSidebarText,
  sidebarLogo
} from "./Sidebar.styles";
import ThemeToggle from "./ThemeToggle";

const buttonWidth = "200px";
const buttonHeight = "40px";
const borderRadius = "8px";
const textMargine = "0px 15px";
const textPadding = "0px";
const channelIconSize = 25;
const channelTextSize = 14;
const channelMargine = "4px";
const channelPadding = "10px";
const channelGap = "15px";

const Sidebar = () => {
  const { theme } = useThemeStore();
  const channelColor = theme.TEXT300;
  const queryClient = useQueryClient();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const channelList = [...useChannelsQuery().channels];
  const navigate = useNavigate();
  const navigatePage = (page: string, channelId?: string) => {
    switch (page) {
      case "HOME":
        return navigate("/");
      case "LOGIN":
        return navigate("/login");
      case "LOGOUT":
        setAccessToken(null);
        queryClient.clear();
        return navigate("/");
      case "USER":
        return navigate("/users/1");
      case "CHANNEL":
        console.log(channelId);
        return navigate(`/channels/${channelId}`);
    }
  };

  return (
    <Flex
      direction="column"
      css={css`
        position: fixed;
        height: 100vh;
        top: 0;
        left: 0;
      `}>
      <nav css={getSidebarNav(borderRadius, theme)}>
        <div css={getSidebarLogo(borderRadius, theme)}>
          <div css={sidebarLogo}>
            <IconText
              iconValue={{ Svg: Logo, size: 50, fill: theme.TEXT600 }}
              textValue={{
                children: "괴발개발",
                size: 30,
                color: theme.TEXT600
              }}
              onClick={() => navigatePage("HOME")}
            />
          </div>
        </div>
        <div
          css={css`
            margin: 20px 0px 0px 0px;
            overflow: auto;
            height: calc(100vh - 280px);
          `}>
          <Text size={12} css={getSidebarText(textMargine, textPadding)}>
            MAIN
          </Text>
          <IconText
            iconValue={{ Svg: Home, size: channelIconSize, fill: channelColor }}
            textValue={{
              children: "홈",
              size: channelTextSize,
              color: channelColor
            }}
            css={getSidebarIconText(
              channelMargine,
              channelPadding,
              borderRadius,
              channelGap,
              theme
            )}
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
            css={getSidebarIconText(
              channelMargine,
              channelPadding,
              borderRadius,
              channelGap,
              theme
            )}
          />
          <IconText
            iconValue={{ Svg: My, size: channelIconSize, fill: channelColor }}
            textValue={{
              children: "내 정보",
              size: channelTextSize,
              color: channelColor
            }}
            css={getSidebarIconText(
              channelMargine,
              channelPadding,
              borderRadius,
              channelGap,
              theme
            )}
            onClick={() => navigatePage("USER")}
          />
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
            css={getSidebarIconText(
              channelMargine,
              channelPadding,
              borderRadius,
              channelGap,
              theme
            )}
          />
          <Text size={12} css={getSidebarText(textMargine, textPadding)}>
            CHANNELS
          </Text>
          {channelList.map(({ name, _id }) => {
            return (
              <IconText
                key={_id}
                iconValue={{
                  Svg: name === "질문/답변" ? Question : Folder,
                  size: channelIconSize,
                  fill: channelColor
                }}
                textValue={{
                  children: name,
                  size: channelTextSize,
                  color: channelColor
                }}
                css={getSidebarIconText(
                  channelMargine,
                  channelPadding,
                  borderRadius,
                  channelGap,
                  theme
                )}
                onClick={() => navigatePage("CHANNEL", _id)}
              />
            );
          })}
        </div>
        <div
          css={css`
            background-color: ${theme.BACKGROUND200};
            margin: 0px 0px 0px -10px;
            padding: 25px 0px;
            position: fixed;
            width: 270px;
            bottom: 21px;
            border-radius: 0px 0px ${borderRadius} ${borderRadius};
            border-top: 1px solid var(--border-color);
          `}>
          <Flex align="center" direction="column">
            <div
              css={css`
                margin-left: 36px;
              `}>
              {useLoggedIn().isLoggedIn ? (
                <Button
                  width={buttonWidth}
                  height={buttonHeight}
                  background={theme.BACKGROUND200}
                  color={theme.TEXT300}
                  css={css`
                    margin: 0px 0px 10px 0px;
                    border: 1px solid var(--border-color);
                  `}
                  onClick={() => navigatePage("LOGOUT")}>
                  로그아웃
                </Button>
              ) : (
                <Button
                  width={buttonWidth}
                  height={buttonHeight}
                  css={css`
                    margin: 10px 0px;
                  `}
                  onClick={() => navigatePage("LOGIN")}>
                  로그인
                </Button>
              )}
              <ThemeToggle width={buttonWidth} height={buttonHeight} />
            </div>
          </Flex>
        </div>
      </nav>
    </Flex>
  );
};

export default Sidebar;
