import type { Meta, StoryObj } from "@storybook/react";

import { IconProps } from "@components/atoms/Icon";
import { TextProps } from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { Logo } from "@assets/svg";

const meta = {
  title: "components/molecules/iconText",
  component: IconText,
  tags: ["autodocs"],
  argTypes: {
    iconValue: {
      control: "object"
    },
    textValue: {
      control: "object"
    }
  }
} satisfies Meta<{ iconValue: IconProps; textValue: TextProps }>;

export default meta;

export const Default: StoryObj<{ iconValue: IconProps; textValue: TextProps }> =
  {
    args: {
      iconValue: { Svg: Logo, size: 20, fill: "#8B8B8B" },
      textValue: { children: "괴발개발", size: 20 }
    },

    render: (args) => (
      <>
        <IconText {...args}>Text</IconText>
      </>
    )
  };
