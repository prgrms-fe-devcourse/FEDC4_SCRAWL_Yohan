import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { useThemeStore } from "@stores/theme.store";

import { PATH } from "@constants/index";

import { Logo, NotFound } from "@assets/svg";

const ErrorPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();

  return (
    <Flex
      justify="center"
      align="center"
      css={css`
        width: 100%;
        height: 100vh;
        background: ${theme.BACKGROUND200};
      `}>
      <Flex
        direction="column"
        justify="center"
        align="center"
        css={css`
          width: 320px;
          height: 428px;
          gap: 20px;
        `}>
        <IconText
          iconValue={{ Svg: Logo, size: 80, fill: theme.TEXT300 }}
          textValue={{ children: "괴발개발", size: 48, color: theme.TEXT300 }}
        />
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap={10}
          css={css`
            box-sizing: border-box;
            padding: 24px;
            width: 320px;
            height: 400px;
            border-radius: 8px;
            background-color: ${theme.BACKGROUND100};
          `}>
          <Icon Svg={NotFound} size={50} />
          <Text size={45} strong={true}>
            404
          </Text>
          <Text size={18} strong={true}>
            해당 페이지는 존재하지 않습니다
          </Text>
          <Text size={12} strong={true} color={theme.TEXT100}>
            이 앱의 새로운 페이지를 찾으려면 다시 시도하세요.
          </Text>
          <Button
            width="100%"
            height="35px"
            onClick={() => navigate(PATH.HOME)}>
            홈으로
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ErrorPage;
