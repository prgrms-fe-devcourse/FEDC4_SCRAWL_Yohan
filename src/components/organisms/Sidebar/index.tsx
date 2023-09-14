import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { Logo } from "@assets/svg";
import { Alert, Folder, Home, My, Question, Search } from "@assets/svg";

import ThemeToggle from "./ThemeToggle";

const buttonWidth = "200px";
const buttonHeight = "40px";
const borderRadius = "8px";
const channelIconSize = 25;
const channelTextSize = 20;
const channelMargine = "30px";
const channelGap = "15px";

const { test1 } = { test1: "64f1b17f0a678e0ff0ed05f3" };

const Sidebar = () => {
  const { theme } = useThemeStore();
  const channelColor = theme.TEXT300;
  const queryClient = useQueryClient();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const navigate = useNavigate();
  const navigatePage = (page: string) => {
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
      case "TEST1":
        return navigate(`/channels/${test1}`);
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
      <nav
        css={css`
          margin: 20px;
          padding: 10px;
          width: 250px;
          flex-grow: 1;
          border: 1px solid var(--border-color);
          border-radius: ${borderRadius};
          background-color: ${theme.BACKGROUND100};
          position: relative;
        `}>
        <div
          css={css`
            background-color: ${theme.BACKGROUND200};
            margin: -10px -10px;
            padding: 10px;
            border-radius: ${borderRadius} ${borderRadius} 0px 0px;
            border-bottom: 1px solid var(--border-color);
          `}>
          <Flex align="center" onClick={() => navigatePage("HOME")}>
            <Icon size={50} fill={theme.TEXT600} Svg={Logo}></Icon>
            <Text size={30} color={theme.TEXT600} strong={true}>
              괴발개발
            </Text>
          </Flex>
        </div>
        <div>
          <IconText
            iconValue={{ Svg: Home, size: channelIconSize, fill: channelColor }}
            textValue={{
              children: "홈",
              size: channelTextSize,
              color: channelColor
            }}
            css={css`
              margin: ${channelMargine};
              gap: ${channelGap};
            `}
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
            css={css`
              margin: ${channelMargine};
              gap: ${channelGap};
            `}
          />
          <IconText
            iconValue={{ Svg: My, size: channelIconSize, fill: channelColor }}
            textValue={{
              children: "내 정보",
              size: channelTextSize,
              color: channelColor
            }}
            css={css`
              margin: ${channelMargine};
              gap: ${channelGap};
            `}
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
            css={css`
              margin: ${channelMargine};
              gap: ${channelGap};
            `}
          />
          <IconText
            iconValue={{
              Svg: Question,
              size: channelIconSize,
              fill: channelColor
            }}
            textValue={{
              children: "질문/답변",
              size: channelTextSize,
              color: channelColor
            }}
            css={css`
              margin: ${channelMargine};
              gap: ${channelGap};
            `}
          />
          <IconText
            iconValue={{
              Svg: Folder,
              size: channelIconSize,
              fill: channelColor
            }}
            textValue={{
              children: "TEST1",
              size: channelTextSize,
              color: channelColor
            }}
            css={css`
              margin: ${channelMargine};
              gap: ${channelGap};
            `}
            onClick={() => navigatePage("TEST1")}
          />
        </div>
        <div
          css={css`
            background-color: ${theme.BACKGROUND200};
            margin: -10px 0px 0px -10px;
            padding: 25px 0px;
            position: absolute;
            bottom: 0px;
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
                    margin: 10px 0px;
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
