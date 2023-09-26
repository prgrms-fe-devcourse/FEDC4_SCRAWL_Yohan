import { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CommentForm from "@components/molecules/CommentForm";

import { useArticleQuery } from "@hooks/api/useArticleQuery";

import { Article } from "@type/models/Article";

const meta = {
  title: "components/molecules/CommentForm",
  component: CommentForm,
  tags: ["autodocs"]
} satisfies Meta<typeof CommentForm>;

export default meta;

// Create a client
const queryClient = new QueryClient();

const CommentFormWarpper = () => {
  const { article } = useArticleQuery("64f57c520a678e0ff0ed0937");

  return (
    <QueryClientProvider client={queryClient}>
      <CommentForm width="100%" article={article} />
    </QueryClientProvider>
  );
};

export const Default: StoryObj<typeof meta> = {
  render: () => <CommentFormWarpper />,
  args: {
    width: "935px",
    article: null as unknown as Article
  }
};
