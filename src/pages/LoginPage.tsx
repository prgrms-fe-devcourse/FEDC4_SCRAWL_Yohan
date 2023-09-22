import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState
} from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import { login } from "@apis/user/login";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Input from "@components/atoms/Input";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { DOMAIN } from "@constants/api";
import { emailPattern } from "@constants/regex";

import { testRegex } from "@utils/testRegEx";
import withEnter from "@utils/withEnter";

import { Logo } from "@assets/svg";

type loginFormState = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const queryClient = useQueryClient();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const [form, setForm] = useState<loginFormState>({ email: "", password: "" });
  const navigate = useNavigate();
  const { isLoggedIn } = useLoggedIn();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(DOMAIN.HOME, { replace: true });
      return;
    }
  }, []);

  const handleUpdateForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleLogin = async (form: loginFormState) => {
    if (form.email === "" || form.password === "") {
      toast.error("비밀번호 혹은 아이디가 입력되지 않았습니다.");
      return;
    }
    if (!testRegex(emailPattern, form.email)) {
      toast.error("이메일 형식이 맞지 않습니다.");
      return;
    }
    try {
      const token = await login(form);
      queryClient.clear();
      setAccessToken(token);
      navigate(DOMAIN.HOME, { replace: true });
    } catch (e) {
      toast.error("비밀번호 혹은 아이디가 잘못되었습니다.");
      return;
    }
  };
  const handleLoginWithEnter: KeyboardEventHandler<HTMLElement> = (e) => {
    withEnter(e, () => handleLogin(form));
  };

  const handleMoveHome = () => {
    navigate(DOMAIN.HOME);
  };

  return (
    <Flex
      onKeyUp={handleLoginWithEnter}
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
          cursor: pointer;
        `}>
        <Flex>
          <IconText
            css={css`
              gap: 10px;
            `}
            onClick={handleMoveHome}
            iconValue={{ Svg: Logo, size: 64, fill: theme.TEXT300 }}
            textValue={{ children: "괴발개발", size: 48, color: theme.TEXT300 }}
          />
        </Flex>

        <Flex
          justify="center"
          align="center"
          css={css`
            background: ${theme.BACKGROUND100};
            box-shadow: ${theme.SHADOW};
            width: 320px;
            border-radius: 8px;
          `}>
          <Flex
            direction="column"
            justify="center"
            align="center"
            css={css`
              width: 272px;
              gap: 24px;
              margin: 24px 0;
            `}>
            <Flex
              direction="column"
              justify="space-between"
              align="start"
              css={css`
                width: 272px;
                height: 62px;
              `}>
              <Flex
                css={css`
                  color: ${theme.TEXT600};
                `}>
                이메일
              </Flex>
              <Input
                width="100%"
                height="35px"
                fontSize="14px"
                background={theme.BACKGROUND200}
                color={theme.TEXT300}
                border={`1px solid ${theme.BORDER100}`}
                borderRadius="4px"
                type="email"
                value={form.email}
                name="email"
                onChange={handleUpdateForm}
              />
            </Flex>
            <Flex
              direction="column"
              justify="space-between"
              align="start"
              css={css`
                width: 272px;
                height: 62px;
              `}>
              <Flex
                css={css`
                  color: ${theme.TEXT600};
                `}>
                비밀번호
              </Flex>
              <Input
                width="100%"
                height="35px"
                fontSize="14px"
                background={theme.BACKGROUND200}
                color={theme.TEXT300}
                border={`1px solid ${theme.BORDER100}`}
                borderRadius="4px"
                type="password"
                value={form.password}
                name="password"
                onChange={handleUpdateForm}
              />
            </Flex>
            <Button
              width="100%"
              height="35px"
              onClick={() => handleLogin(form)}>
              로그인
            </Button>
            <Text size={14}>
              아직 회원이 아니신가요?&nbsp;
              <Link
                css={css`
                  color: ${theme.PRIMARY};
                  &:visited {
                    color: ${theme.PRIMARY};
                  }
                `}
                to={DOMAIN.SIGNUP}>
                회원가입
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
