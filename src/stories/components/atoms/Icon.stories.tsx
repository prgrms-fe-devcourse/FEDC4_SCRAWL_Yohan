import type { Meta, StoryObj } from "@storybook/react";

import Icon from "@components/atoms/Icon";

import {
  Add,
  Alert,
  BracketLower,
  BracketUpper,
  ExpandLess,
  ExpandMore,
  Folder,
  Home,
  Like,
  Logo,
  Message,
  My,
  Question,
  Search
} from "@assets/svg";

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
  render: (args) => (
    <>
      <Icon {...args} Svg={Alert} />
      <Icon {...args} Svg={BracketLower} />
      <Icon {...args} Svg={BracketUpper} />
      <Icon {...args} Svg={ExpandLess} />
      <Icon {...args} Svg={ExpandMore} />
      <Icon {...args} Svg={Folder} />
      <Icon {...args} Svg={Home} />
      <Icon {...args} Svg={Like} />
      <Icon {...args} Svg={Logo} />
      <Icon {...args} Svg={Message} />
      <Icon {...args} Svg={My} />
      <Icon {...args} Svg={Question} />
      <Icon {...args} Svg={Search} />
      <Icon {...args} Svg={Add} />
    </>
  )
};
