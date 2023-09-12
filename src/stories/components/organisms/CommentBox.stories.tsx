import { Meta, StoryObj } from "@storybook/react";

import QuestionBox from "@components/organisms/CommentBox";

const meta = {
  title: "components/organisms/QuestionBox",
  component: QuestionBox,
  tags: ["autodocs"]
} satisfies Meta<typeof QuestionBox>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args) => <QuestionBox {...args} />,
  args: {
    imageSrc: "",
    questionAuthorName: "user",
    questionContent:
      "<h3>질문 내용질문</h3> 질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문질문 내용질문 "
  }
};
