import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";

import { useThemeStore } from "@stores/theme.store";

import ArticleEditor from "./ArticleEditor";
import ArticleTag from "./ArticleTag";
import ArticleTitle from "./ArticleTitle";
import ChannelSelect from "./ChannelSelect";

const stateChange = (setState: (value: string) => void) => (value: string) => {
  setState(value);
};

const ArticleWrite = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const { theme } = useThemeStore();
  const width = "1000px";

  const ArticleWriteButton = css`
    margin-top: 10px;
    width: ${width};
    :hover {
      cursor: pointer;
    }
  `;

  useEffect(() => {
    console.log("title:", title);
    console.log("tag:", tag);
    console.log("content:", content);
  }, [title, tag, content]);
  return (
    <Flex
      direction="column"
      css={css`
        margin: 20px;
      `}>
      <ChannelSelect />
      <ArticleTitle stateChange={stateChange(setTitle)} width={width} />
      <ArticleTag stateChange={stateChange(setTag)} width={width} />
      <ArticleEditor stateChange={stateChange(setContent)} width={width} />
      <Flex css={ArticleWriteButton} justify="space-between">
        <Button
          background="none"
          children="나가기"
          width="50px"
          height="30px"
          color={theme.TEXT600}></Button>
        <Button
          children="완료"
          width="50px"
          height="30px"
          color={theme.TEXT100}></Button>
      </Flex>
    </Flex>
  );
};

export default ArticleWrite;
