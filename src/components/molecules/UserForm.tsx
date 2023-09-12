import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Input from "@components/atoms/Input";

import { useThemeStore } from "@stores/theme.store";
import { useTokenStore } from "@stores/token.store";

import { DOMAIN } from "@constants/api";

type FormState = {
  [key: string]: string;
};
type FormFiled = {
  label: string;
  type: "email" | "text" | "password";
  name: string;
};
type UserFormProps = {
  formFilelds: FormFiled[];
  buttonText: string;
  handleGetAccessToken: (formState: FormState) => Promise<string>;
};

const UserForm = ({
  formFilelds,
  handleGetAccessToken,
  buttonText
}: UserFormProps) => {
  const [form, setForm] = useState<FormState>({});
  const setAccessToken = useTokenStore((state) => state.setAccessToken);
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();

  const handleUpdateForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const handleGetAuth = async (form: FormState) => {
    const token = await handleGetAccessToken(form);
    setAccessToken(token);
    navigate(DOMAIN.HOME, { replace: true });
  };

  return (
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
        {formFilelds.map(({ type, label, name }) => (
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
          width="100%"
          height="35px"
          onClick={() => handleGetAuth(form)}
          color={theme.TEXT100}>
          {buttonText}
        </Button>
      </Flex>
    </Flex>
  );
};

export default UserForm;
