import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import { login } from "@apis/user/login";

import Flex from "@components/atoms/Flex";
import IconText from "@components/molecules/IconText";
import UserForm from "@components/molecules/UserForm";

import { useThemeStore } from "@stores/theme.store";

import { Logo } from "@assets/svg";

const LoginPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const queryClient = useQueryClient();

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
        <UserForm
          formFilelds={[
            { type: "email", label: "이메일", name: "email" },
            { type: "password", label: "비밀번호", name: "password" }
          ]}
          buttonText="로그인"
          handleGetAccessToken={async (formState) => {
            const token = await login(formState);
            queryClient.clear();
            return token;
          }}
        />
      </Flex>
    </Flex>
  );
};

export default LoginPage;
