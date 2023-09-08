import type { Meta, StoryObj } from "@storybook/react";

import Icon from "@components/atoms/Icon";

import { Logo } from "@assets/svg";

const meta = {
  title: "components/atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
    fill: { control: "color" }
  }
} satisfies Meta<typeof Icon>;

export default meta;

export const Default: StoryObj<typeof Icon> = {
  render: (args) => <Icon {...args} Svg={Logo} />
};
