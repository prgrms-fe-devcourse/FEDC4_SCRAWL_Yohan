import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import MDEditor, {
  codeEdit,
  codeLive,
  codePreview
} from "@uiw/react-md-editor";

import Flex from "@components/atoms/Flex";

import { useArticleQuery } from "@hooks/api/useArticleQuery";
import { useError } from "@hooks/useError";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { getEditorStyle } from "@styles/getEditorStyles";

import { useThemeStore } from "@stores/theme.store";

import { articleTitleDataToArticleContent } from "@type/models/Article";

import { AuthError } from "@utils/AuthError";

import ArticleChannelSelect from "./ArticleChannelSelect";
import ArticleWriteButtons from "./ArticleWriteButtons";
import ArticleWriteTag from "./ArticleWriteTag";
import ArticleWriteTitle from "./ArticleWriteTitle";

const ArticleEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { dispatchError } = useError();
  const { isLoggedIn } = useLoggedIn();
  const { article } = useArticleQuery(location.pathname.split("/")[2]);
  const articleId = article.channel._id;
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
  if (!isLoggedIn) dispatchError(new AuthError("로그인이 필요합니다."));

  const navigatePage = (page: string) => {
    switch (page) {
      case "CHANNEL":
        return navigate(`/channels/${channelId}`);
      case "BACK":
        return navigate(-1);
    }
  };

  return (
    <Flex
      direction="column"
      css={css`
        margin: 20px 20px 0 0;
      `}>
      <Helmet key={location.pathname}>
        <title>{title}</title>
      </Helmet>
      <ArticleChannelSelect
        stateChange={(value) => setChannelId(value)}
        state={channelId}
      />
      <ArticleWriteTitle
        stateChange={(value) => setTitle(value)}
        state={title}
        width="100%"
      />
      <ArticleWriteTag
        stateChange={(value) => setTags(value)}
        state={tags}
        width="100%"
      />
      <MDEditor
        data-color-mode={theme.type === "LIGHT" ? "light" : "dark"}
        preview="live"
        extraCommands={[codeEdit, codePreview, codeLive]}
        height="calc(100vh - 300px)"
        highlightEnable={false}
        value={content}
        onChange={(str) => setContent(str || "")}
        css={getEditorStyle(theme)}
      />
      <ArticleWriteButtons
        theme={theme}
        navigatePage={navigatePage}
        totalContent={{ title, channelId, content, tags }}
        postId={article._id}
        purpose="edit"
      />
    </Flex>
  );
};

export default ArticleEdit;
