import { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CommentForm from "@components/molecules/CommentForm";

const meta = {
  title: "components/molecules/CommentForm",
  component: CommentForm,
  tags: ["autodocs"]
} satisfies Meta<typeof CommentForm>;

export default meta;

// Create a client
const queryClient = new QueryClient();

export const Default: StoryObj<typeof meta> = {
  render: (args) => (
    <QueryClientProvider client={queryClient}>
      <CommentForm {...args} />
    </QueryClientProvider>
  ),
  args: {
    width: "935px",
    articleId: "64f57c520a678e0ff0ed0937"
  }
};
