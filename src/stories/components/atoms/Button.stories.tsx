import { css } from "@emotion/react";
import { Meta, StoryObj } from "@storybook/react";

import Button from "@components/atoms/Button";

const meta = {
  title: "components/atoms/Button",
  component: Button,
  tags: ["autodocs"]
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => (
    <Button
      {...args}
      css={css`
        border: 10px solid lightgray;
      `}>
      {args.children}
    </Button>
  ),
  args: {
    width: "200px",
    height: "50px",
    fontSize: "20px",
    background: "#007AFF",
    color: "#FFF",
    borderRadius: "8px",
    children: "hi",
    onClick: (e) => {
      console.log(e.currentTarget.textContent);
    }
  }
};
