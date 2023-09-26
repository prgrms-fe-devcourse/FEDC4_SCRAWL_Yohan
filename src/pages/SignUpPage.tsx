import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState
} from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Input from "@components/atoms/Input";
import IconText from "@components/molecules/IconText";
import { scrawlToast } from "@components/toast";

import { useSignUpMutation } from "@hooks/api/useSignUpMutation";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";

import { DOMAIN } from "@constants/api";
import {
  emailPattern,
  nicknamePattern,
  passwordPattern
} from "@constants/regex";

import { testRegex } from "@utils/testRegEx";
import withEnter from "@utils/withEnter";

import { Logo } from "@assets/svg";

type FormState = {
  email: string;
  fullName: string;
  password: string;
  passwordConfirm: string;
};

const SignUpPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const [form, setForm] = useState<FormState>({
    email: "",
    fullName: "",
    password: "",
    passwordConfirm: ""
  });
  const navigate = useNavigate();
  const { isLoggedIn } = useLoggedIn();
  const signUpMutation = useSignUpMutation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(DOMAIN.HOME, { replace: true });
      return;
    }
  }, [isLoggedIn, navigate]);

  const handleUpdateForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSignUp = async (form: FormState) => {
    if (form.email === "" || form.fullName === "" || form.password === "") {
      scrawlToast.error("모든 입력이 완료되지 않았습니다.");
      return;
    }
    if (!testRegex(emailPattern, form.email)) {
      scrawlToast.error("이메일 형식이 맞지 않습니다.");
      return;
    }
    if (!testRegex(nicknamePattern, form.fullName)) {
      scrawlToast.error("닉네임 형식이 맞지 않습니다.");
      return;
    }
    if (!testRegex(passwordPattern, form.password)) {
      scrawlToast.error("패스워드 형식이 맞지 않습니다.");
      return;
    }
    if (form.password !== form.passwordConfirm) {
      scrawlToast.error("패스워드와 패스워드 확인이 일치하지 않습니다.");
      return;
    }
    signUpMutation.mutate(form);
  };

  const handleSignUpWithEnter: KeyboardEventHandler<HTMLElement> = (e) => {
    withEnter(e, () => handleSignUp(form));
  };

  const handleMoveHome = () => {
    navigate(DOMAIN.HOME);
  };

  return (
    <Flex
      onKeyUp={handleSignUpWithEnter}
      justify="center"
      align="center"
      css={css`
        width: 100%;
        height: 100vh;
        background: ${theme.BACKGROUND200};
      `}>
      <Helmet key={location.pathname}>
        <title>회원가입</title>
      </Helmet>
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
                비밀번호 확인
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
                value={form.passwordConfirm}
                name="passwordConfirm"
                onChange={handleUpdateForm}
              />
            </Flex>
            <Button
              width="100%"
              height="35px"
              onClick={() => handleSignUp(form)}>
              회원가입
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUpPage;
