import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";

import { Theme } from "@constants/theme";

import { getSidebarFooter } from "./Sidebar.styles";
import ThemeToggle from "./ThemeToggle";

type SidebarFooterProps = {
  theme: Theme;
  navigatePage: (page: string, channelID?: string) => void;
  isLoggedIn: boolean;
};
const SidebarFooter = ({
  theme,
  navigatePage,
  isLoggedIn
}: SidebarFooterProps) => {
  const buttonWidth = "200px";
  const buttonHeight = "40px";

  return (
    <div css={getSidebarFooter(theme)}>
      <Flex align="center" direction="column">
        <div
          css={css`
            margin-left: 26px;
          `}>
          {isLoggedIn ? (
            <Button
              width={buttonWidth}
              height={buttonHeight}
              background={theme.BACKGROUND200}
              color={theme.TEXT300}
              css={css`
                margin-bottom: 10px;
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
                margin-bottom: 10px;
              `}
              onClick={() => navigatePage("LOGIN")}>
              로그인
            </Button>
          )}
          <ThemeToggle width={buttonWidth} height={buttonHeight} />
        </div>
      </Flex>
    </div>
  );
};
export default SidebarFooter;
