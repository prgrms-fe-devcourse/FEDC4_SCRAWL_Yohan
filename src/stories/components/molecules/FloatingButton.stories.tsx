import type { Meta, StoryObj } from "@storybook/react";

import { ButtonProps } from "@components/atoms/Button";
import { IconProps } from "@components/atoms/Icon";
import FloatingButton from "@components/molecules/FloatingButton";

import { UpperBracket } from "@assets/svg";

const meta = {
  title: "components/molecules/floatingButton",
  component: FloatingButton,
  tags: ["autodocs"],
  argTypes: {
    iconValue: {
      control: "object"
    },
    buttonValue: {
      control: "object"
    }
  }
} satisfies Meta<{ iconValue: IconProps; buttonValue: ButtonProps }>;

export default meta;

export const Default: StoryObj<{
  iconValue: IconProps;
  buttonValue: ButtonProps;
}> = {
  args: {
    iconValue: { Svg: UpperBracket, size: 20, fill: "#8B8B8B" },
    buttonValue: {
      width: "50px",
      height: "50px",
      fontSize: "14px",
      background: "#cccccc",
      color: "#FFF",
      borderRadius: "50px"
    }
  },

  render: (args) => (
    <>
      <FloatingButton {...args}>Text</FloatingButton>
    </>
  )
};
