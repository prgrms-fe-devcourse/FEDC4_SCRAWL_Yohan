import { BrowserRouter } from "react-router-dom";

import { Meta, StoryObj } from "@storybook/react";

import { Card } from "@components/organisms/Card";

import { Article } from "@type/models/Article";

const meta = {
  title: "components/organisms/Card",
  component: Card,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <Card {...args} />,
  args: {
    article: {
      _id: "kajskldjl123",
      title: JSON.stringify({
        title:
          "제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다",
        content:
          "내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다",
        tags: ["__react__", "__javascript__"]
      }),
      likes: [1, 2, 3, 4, 5],
      comments: [1, 2, 3, 4, 5],
      createdAt: new Date().toLocaleDateString(),
      author: { _id: "ahjskld", fullName: "jinwook" }
    } as unknown as Article
  }
};
