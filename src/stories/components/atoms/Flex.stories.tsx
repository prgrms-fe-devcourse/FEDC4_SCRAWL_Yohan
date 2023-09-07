import { css } from "@emotion/react";
import { Meta, StoryObj } from "@storybook/react";

import Flex from "@components/atoms/Flex";

const meta = {
  title: "components/atoms/Flex",
  component: Flex,
  tags: ["autodocs"]
} satisfies Meta<typeof Flex>;

export default meta;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: lightgray;
      width: 100px;
      height: 100px;
      margin: 10px;
    `}>
    {children}
  </div>
);

export const Default: StoryObj<typeof meta> = {
  render: (args) => (
    <Flex {...args}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
    </Flex>
  ),
  args: {
    direction: "row",
    align: "start",
    justify: "start",
    children: ""
  }
};
