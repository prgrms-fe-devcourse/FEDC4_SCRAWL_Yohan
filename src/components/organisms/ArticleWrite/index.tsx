import { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";

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
  const width = "1000px";
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
    </Flex>
  );
};

export default ArticleWrite;
