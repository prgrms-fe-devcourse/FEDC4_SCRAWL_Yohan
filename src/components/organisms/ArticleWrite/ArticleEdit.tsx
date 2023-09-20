import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";

import { useArticleQuery } from "@hooks/api/useArticleQuery";
import { useError } from "@hooks/useError";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";

import { articleTitleDataToArticleContent } from "@type/models/Article";

import { AuthError } from "@utils/AuthError";

import ArticleChannelSelect from "./ArticleChannelSelect";
import ArticleWriteButtons from "./ArticleWriteButtons";
import ArticleWriteEditor from "./ArticleWriteEditor";
import ArticleWriteTag from "./ArticleWriteTag";
import ArticleWriteTitle from "./ArticleWriteTitle";

const ArticleEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const articleId = location.pathname.split("/")[2];
  const { dispatchError } = useError();
  const { isLoggedIn } = useLoggedIn();
  const { article } = useArticleQuery(articleId);
  const {
    title: preTitle,
    content: preContent,
    tags: preTags
  } = articleTitleDataToArticleContent(article.title);
  const [channelId, setChannelId] = useState(articleId);
  const [title, setTitle] = useState(preTitle);
  const [tags, setTags] = useState<string[]>([...preTags]);
  const [content, setContent] = useState(preContent);
  const { theme } = useThemeStore();

  console.log(channelId, title, tags, content);

  if (!isLoggedIn) dispatchError(new AuthError("로그인이 필요합니다."));

  const navigatePage = (page: string) => {
    switch (page) {
      case "CHANNEL":
        return navigate(`/channels/${channelId}`);
      case "BACK":
        return navigate(-1);
    }
  };
  const width = "70%";

  return (
    <Flex
      direction="column"
      css={css`
        margin: 20px;
      `}>
      <ArticleChannelSelect stateChange={(value) => setChannelId(value)} />
      <ArticleWriteTitle
        stateChange={(value) => setTitle(value)}
        width={width}
      />
      <ArticleWriteTag stateChange={(value) => setTags(value)} width={width} />
      <ArticleWriteEditor
        stateChange={(value) => setContent(value)}
        width={width}
      />
      <ArticleWriteButtons
        theme={theme}
        navigatePage={navigatePage}
        totalContent={{ title, channelId, content, tags }}
      />
    </Flex>
  );
};

export default ArticleEdit;
