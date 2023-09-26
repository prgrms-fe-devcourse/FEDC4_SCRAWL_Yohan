import type { Meta, StoryObj } from "@storybook/react";

import Icon from "@components/atoms/Icon";

import {
  AI,
  Add,
  Alert,
  AlertMore,
  Back,
  BigData,
  BracketLower,
  BracketUpper,
  Data,
  DevOps,
  Embedded,
  ExpandLess,
  ExpandMore,
  Folder,
  Free,
  Front,
  Game,
  Home,
  Job,
  KeyboardTab,
  KeyboardTabRtl,
  Like,
  Logo,
  Message,
  My,
  Question,
  Search,
  Security
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
      <Icon {...args} Svg={AI} />
      <Icon {...args} Svg={AlertMore} />
      <Icon {...args} Svg={Back} />
      <Icon {...args} Svg={BigData} />
      <Icon {...args} Svg={Data} />
      <Icon {...args} Svg={DevOps} />
      <Icon {...args} Svg={Embedded} />
      <Icon {...args} Svg={Free} />
      <Icon {...args} Svg={Front} />
      <Icon {...args} Svg={Game} />
      <Icon {...args} Svg={Job} />
      <Icon {...args} Svg={Security} />
      <Icon {...args} Svg={KeyboardTab} />
      <Icon {...args} Svg={KeyboardTabRtl} />
    </>
  )
};
