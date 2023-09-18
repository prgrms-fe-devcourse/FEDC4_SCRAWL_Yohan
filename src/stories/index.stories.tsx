import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "example"
} satisfies Meta;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: () => <div>example</div>
};
