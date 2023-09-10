import { Meta, StoryObj } from "@storybook/react";

import CommentForm from "@components/molecules/CommentForm";

const meta = {
  title: "components/molecules/CommentForm",
  component: CommentForm,
  tags: ["autodocs"]
} satisfies Meta<typeof CommentForm>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <CommentForm {...args} />,
  args: {
    width: "935px",
    src: "https://picsum.photos/500",
    themeType: "DARK"
  }
};
