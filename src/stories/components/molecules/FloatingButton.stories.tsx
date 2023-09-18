import type { Meta, StoryObj } from "@storybook/react";

import { ButtonProps } from "@components/atoms/Button";
import { IconProps } from "@components/atoms/Icon";
import FloatingButton from "@components/molecules/FloatingButton";

import { BracketUpper } from "@assets/svg";

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
    iconValue: { Svg: BracketUpper, size: 20, fill: "#8B8B8B" },
    buttonValue: {
      width: "50px",
      height: "50px",
      fontSize: "14px",
      background: "#cccccc",
      color: "#FFF",
      borderRadius: "50px",
      children: "",
      onClick: (e) => {
        console.log(e.currentTarget.textContent);
      }
    }
  },

  render: (args) => (
    <>
      <FloatingButton {...args}>Text</FloatingButton>
    </>
  )
};
