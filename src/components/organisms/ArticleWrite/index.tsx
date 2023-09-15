import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";

import { useArticleCreateMutation } from "@hooks/api/useArticleCreateMutation";

import { useThemeStore } from "@stores/theme.store";

import { articleContentToArticleTitleData } from "@type/models/Article";

import ArticleEditor from "./ArticleEditor";
import ArticleTag from "./ArticleTag";
import ArticleTitle from "./ArticleTitle";
import ChannelSelect from "./ChannelSelect";

const ArticleWrite = () => {
  const navigate = useNavigate();
  const { mutate } = useArticleCreateMutation();
  const [channelId, setChannelId] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const { theme } = useThemeStore();
  const navigatePage = (page: string) => {
    switch (page) {
      case "CHANNEL":
        return navigate(`/channels/${channelId}`);
      case "BACK":
        return navigate(-1);
    }
  };
  const width = "1000px";

  const ArticleWriteButton = css`
    margin-top: 10px;
    width: ${width};
    :hover {
      cursor: pointer;
    }
  `;

  const handleCreateButtonClick = () => {
    if (title && channelId) {
      mutate({
        title: articleContentToArticleTitleData({
          title,
          content,
          tags
        }),
        channelId: channelId
      });
      navigatePage("CHANNEL");
    }
  };

  return (
    <Flex
      direction="column"
      css={css`
        margin: 20px;
      `}>
      <ChannelSelect stateChange={(value) => setChannelId(value)} />
      <ArticleTitle stateChange={(value) => setTitle(value)} width={width} />
      <ArticleTag stateChange={(value) => setTags(value)} width={width} />
      <ArticleEditor stateChange={(value) => setContent(value)} width={width} />
      <Flex css={ArticleWriteButton} justify="space-between">
        <Button
          background="none"
          children="나가기"
          width="50px"
          height="30px"
          color={theme.TEXT600}
          onClick={() => navigatePage("BACK")}></Button>
        <Button
          children="완료"
          width="50px"
          height="30px"
          color={theme.TEXT100}
          onClick={handleCreateButtonClick}></Button>
      </Flex>
    </Flex>
  );
};

export default ArticleWrite;
