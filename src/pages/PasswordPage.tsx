import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import { useQueryClient } from "@tanstack/react-query";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Input from "@components/atoms/Input";
import IconText from "@components/molecules/IconText";
import { scrawlToast } from "@components/toast";

import { useUserPasswordUpdateMutation } from "@hooks/api/useUserPasswordUpdateMutation";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";

import { DOMAIN } from "@constants/api";
import { passwordPattern } from "@constants/regex";

import { testRegex } from "@utils/testRegEx";
import withEnter from "@utils/withEnter";

import { Logo } from "@assets/svg";

type passwordFormState = {
  password: string;
  passwordConfirm: string;
};

const PasswordPage = () => {
  const userPasswordUpdate = useUserPasswordUpdateMutation();
  const theme = useThemeStore((state) => state.theme);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [form, setForm] = useState<passwordFormState>({
    password: "",
    passwordConfirm: ""
  });

  const { isLoggedIn } = useLoggedIn();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(DOMAIN.HOME, { replace: true });
      return;
    }
  }, []);

  const handleUpdatePassword = () => {
    if (form.password === "" || form.passwordConfirm === "") {
      scrawlToast.error("비밀번호 혹은 비밀번호 확인이 입력되지 않았습니다.");
      return;
    }
    if (form.password !== form.passwordConfirm) {
      scrawlToast.error("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    if (!testRegex(passwordPattern, form.password)) {
      scrawlToast.error("패스워드 형식이 맞지 않습니다.");
      return;
    }

    try {
      userPasswordUpdate.mutate(form);
      queryClient.clear();
      navigate(DOMAIN.HOME);
      scrawlToast.success("비빌번호 변경에 성공했습니다.");
    } catch (e) {
      scrawlToast.error("비밀번호 변경 중 오류가 발생하였습니다.");
      return;
    }
  };

  const handleUpdatePasswordWithEnter: KeyboardEventHandler<HTMLElement> = (
    e
  ) => {
    withEnter(e, () => handleUpdatePassword());
  };

  const handleUpdateForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleMoveHome = () => {
    navigate(DOMAIN.HOME);
  };

  return (
    <Flex
      onKeyUp={handleUpdatePasswordWithEnter}
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
            <Button width="100%" height="35px" onClick={handleUpdatePassword}>
              비밀번호 변경하기
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PasswordPage;
