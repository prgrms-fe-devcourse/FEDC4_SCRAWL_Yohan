import { Meta, StoryObj } from "@storybook/react";

import { signUp } from "@apis/user/signUp";

import UserForm from "@components/molecules/UserForm";

const meta = {
  title: "components/molecules/UserForm",
  component: UserForm,
  tags: ["autodocs"]
} satisfies Meta<typeof UserForm>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <UserForm {...args} />,
  args: {
    formFilelds: [
      { type: "email", label: "이메일", name: "email" },
      { type: "text", label: "닉네임", name: "fullName" },
      { type: "password", label: "비밀번호", name: "password" },
      { type: "password", label: "비밀번호 확인", name: "password" }
    ],
    buttonText: "계정 생성하기",
    handleGetAccessToken: async (formState) => {
      const token = await signUp(formState);
      return token;
    }
  }
};
