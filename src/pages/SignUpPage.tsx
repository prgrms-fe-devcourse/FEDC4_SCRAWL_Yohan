import { ChangeEventHandler, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import { signUp } from "@apis/user/signUp";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Input from "@components/atoms/Input";
import IconText from "@components/molecules/IconText";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { DOMAIN } from "@constants/api";
import {
  emailPattern,
  nicknamePattern,
  passwordPattern
} from "@constants/regex";

import { testRegex } from "@utils/testRegEx";

import { Logo } from "@assets/svg";

type FormState = {
  email: string;
  fullName: string;
  password: string;
};

const SignUpPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const queryClient = useQueryClient();
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const [form, setForm] = useState<FormState>({
    email: "",
    fullName: "",
    password: ""
  });
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

  const handleSignUp = async (form: FormState) => {
    if (form.email === "" || form.fullName === "" || form.password === "") {
      toast.error("모든 입력이 완료되지 않았습니다.");
      return;
    }
    if (!testRegex(emailPattern, form.email)) {
      toast.error("이메일 형식이 맞지 않습니다.");
      return;
    }
    if (!testRegex(nicknamePattern, form.fullName)) {
      toast.error("닉네임 형식이 맞지 않습니다.");
      return;
    }
    if (!testRegex(passwordPattern, form.password)) {
      toast.error("패스워드 형식이 맞지 않습니다.");
      return;
    }
    try {
      const token = await signUp(form);
      queryClient.clear();
      setAccessToken(token);
      navigate(DOMAIN.HOME, { replace: true });
    } catch (e) {
      toast.error("이미 존재하는 이메일 입니다.");
      return;
    }
  };
  const handleMoveHome = () => {
    navigate(DOMAIN.HOME);
  };

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
          cursor: pointer;
        `}>
        <IconText
          onClick={handleMoveHome}
          iconValue={{ Svg: Logo, size: 80, fill: theme.TEXT300 }}
          textValue={{ children: "괴발개발", size: 48, color: theme.TEXT300 }}
        />
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
                placeholder="user@gmail.com"
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
                닉네임
              </Flex>
              <Input
                placeholder="20자 이하(알파벳, 한글, 숫자)"
                width="100%"
                height="35px"
                fontSize="14px"
                background={theme.BACKGROUND200}
                color={theme.TEXT300}
                border={`1px solid ${theme.BORDER100}`}
                borderRadius="4px"
                type="text"
                value={form.fullName}
                name="fullName"
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
                placeholder="6자 이상(알파벳, 숫자 필수)"
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
              onClick={() => handleSignUp(form)}
              color={theme.TEXT100}>
              회원가입
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
