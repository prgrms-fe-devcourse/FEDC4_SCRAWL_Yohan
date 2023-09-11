import { useEffect, useState } from "react";

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
  useEffect(() => {
    console.log("title:", title);
    console.log("tag:", tag);
    console.log("content:", content);
  }, [title, tag, content]);
  return (
    <>
      <Flex direction="column">
        <ChannelSelect />
        <ArticleTitle stateChange={stateChange(setTitle)} />
        <ArticleTag stateChange={stateChange(setTag)} />
        <ArticleEditor stateChange={stateChange(setContent)} />
      </Flex>
    </>
  );
};

export default ArticleWrite;
