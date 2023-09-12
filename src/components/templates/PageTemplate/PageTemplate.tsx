import { Outlet } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Text from "@components/atoms/Text";
import {
  pageInnerWrapperStyle,
  pageTemplateWrapperStyle
} from "@components/templates/PageTemplate/PageTemplate.styles";

import { useThemeStore } from "@stores/theme.store";

import { Logo } from "@assets/svg";

const PageTemplate = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Flex css={pageTemplateWrapperStyle}>
      {/** TODO 사이드바 (스타일은 예시 입니다) */}
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
            width: 256px;
            flex-grow: 1;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            background-color: ${theme.BACKGROUND200};
          `}>
          <Flex align="center">
            <Icon size={50} fill={theme.TEXT600} Svg={Logo}></Icon>
            <Text size={30} color={theme.TEXT600} strong={true}>
              괴발개발
            </Text>
          </Flex>
          <Button onClick={toggleTheme}>toggle theme</Button>
        </nav>
      </Flex>
      <div css={pageInnerWrapperStyle}>
        <Outlet />
      </div>
    </Flex>
  );
};

export default PageTemplate;
