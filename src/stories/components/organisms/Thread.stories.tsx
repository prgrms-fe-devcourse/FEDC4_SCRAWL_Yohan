import { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Thread } from "@components/organisms/Thread";

import { useArticlesByChannelIdQuery } from "@hooks/api/useArticlesByChannelIdQuery";
import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { Article } from "@type/models/Article";

const meta = {
  title: "components/organisms/Thread",
  component: Thread,
  tags: ["autodocs"]
} satisfies Meta<typeof Thread>;

export default meta;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});
const Inner = () => {
  const { channels } = useChannelsQuery();
  const { data } = useArticlesByChannelIdQuery(channels[0]._id);
  return <Thread data={data?.pages[0][0] as Article} />;
};

export const Default: StoryObj<typeof meta> = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <Inner />
    </QueryClientProvider>
  ),
  args: { data: null as unknown as Article }
};
