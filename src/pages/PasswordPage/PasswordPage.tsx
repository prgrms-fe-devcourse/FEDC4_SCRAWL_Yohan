import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Input from "@components/atoms/Input";
import IconText from "@components/molecules/IconText";

import { useUserPasswordUpdateMutation } from "@hooks/api/useUserPasswordUpdateMutation";

import { useThemeStore } from "@stores/theme.store";

import { DOMAIN } from "@constants/api";

import { Logo } from "@assets/svg";

type FormState = {
  [key: string]: string;
};
type FormFiled = {
  label: string;
  type: "email" | "text" | "password";
  name: string;
};

const PasswordPage = () => {
  const userPasswordUpdate = useUserPasswordUpdateMutation();
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();

  const [form, setForm] = useState<FormState>({
    password: "",
    passwordConfirm: ""
  });
  const formFields: FormFiled[] = [
    { type: "password", label: "비밀번호", name: "password" },
    { type: "password", label: "비밀번호 확인", name: "passwordConfirm" }
  ];

  const handleUpdatePasswordClick = () => {
    userPasswordUpdate.mutate(form);
    navigate(DOMAIN.HOME);
  };
  const handleUpdateForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
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
        `}>
        <IconText
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
            {formFields.map(({ type, label, name }, index) => (
              <Flex
                key={index}
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
                  {label}
                </Flex>
                <Input
                  width="100%"
                  height="35px"
                  fontSize="14px"
                  background={theme.BACKGROUND200}
                  color={theme.TEXT300}
                  border={`1px solid ${theme.BORDER100}`}
                  borderRadius="4px"
                  type={type}
                  value={form.value}
                  name={name}
                  onChange={handleUpdateForm}
                />
              </Flex>
            ))}
            <Button
              css={css`
                opacity: ${form.password !== form.passwordConfirm && 0.5};
              `}
              width="100%"
              height="35px"
              onClick={handleUpdatePasswordClick}
              color={theme.TEXT100}
              disabled={form.password !== form.passwordConfirm}>
              비밀번호 변경하기
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PasswordPage;
