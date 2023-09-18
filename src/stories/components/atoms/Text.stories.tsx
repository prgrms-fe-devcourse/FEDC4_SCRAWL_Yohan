import type { Meta, StoryObj } from "@storybook/react";

import Text from "@components/atoms/Text";

const meta = {
  title: "components/atoms/text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    delete: { control: "boolean" },
    color: { control: "color" },
    block: { control: "boolean" },
    paragraph: { control: "boolean" }
  }
} satisfies Meta<typeof Text>;

export default meta;

export const Default: StoryObj<typeof Text> = {
  render: (args) => (
    <>
      <Text {...args}>Text</Text>
      <Text {...args}>Text</Text>
    </>
  )
};
