import { Meta, StoryObj } from "@storybook/react";

import Image from "@components/atoms/Image";

const meta = {
  title: "components/atoms/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "range", min: 200, max: 1000 }
    },
    height: {
      control: { type: "range", min: 200, max: 1000 }
    }
  }
} satisfies Meta<typeof Image>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <Image {...args} />,
  args: {
    src: "https://picsum.photos/500",
    mode: "cover",
    width: 200,
    height: 200,
    block: false,
    alt: "image"
  }
};
