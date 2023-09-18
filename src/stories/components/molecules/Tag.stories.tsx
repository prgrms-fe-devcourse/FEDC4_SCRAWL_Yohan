import { Meta, StoryObj } from "@storybook/react";

import Flex from "@components/atoms/Flex";
import Tag from "@components/molecules/Tag";

const meta = {
  title: "components/molecules/Tag",
  component: Tag,
  tags: ["autodocs"]
} satisfies Meta<typeof Tag>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <Tag {...args} />,
  args: {
    size: 12,
    name: `__react__`
  }
};

export const Tags: StoryObj<typeof meta> = {
  render: (args) => (
    <Flex gap={5}>
      <Tag {...args} />
      <Tag {...args} />
      <Tag {...args} />
      <Tag {...args} />
    </Flex>
  ),
  args: {
    size: 12,
    name: `__react__`
  }
};
