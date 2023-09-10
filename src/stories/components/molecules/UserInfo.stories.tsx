import { Meta, StoryObj } from "@storybook/react";

import UserInfo from "@components/molecules/UserInfo";

const meta = {
  title: "components/molecules/UserInfo",
  component: UserInfo,
  tags: ["autodocs"]
} satisfies Meta<typeof UserInfo>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <UserInfo {...args} />,
  args: {
    imageSrc: "https://picsum.photos/500",
    imgWidth: 20,
    username: "testUser",
    fontSize: 16,
    gap: 5
  }
};
