import { css } from "@emotion/react";
import { Meta, StoryObj } from "@storybook/react";

import Input from "@components/atoms/Input";

const meta = {
  title: "components/atoms/Input",
  component: Input,
  tags: ["autodocs"]
} satisfies Meta<typeof Input>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => (
    <Input
      {...args}
      css={css`
        background: red;
      `}
    />
  ),
  args: {
    width: "272px",
    height: "35px",
    fontSize: "14px",
    background: "#f9f9f9",
    color: "#111",
    border: "1px solid #eee",
    borderRadius: "8px",
    type: "text",
    placeholder: "password",
    value: "hi",
    name: "comment",
    onChange: (e) => console.log(e.currentTarget.value)
  }
};
