import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";
import MDEditor, {
  codeEdit,
  codeLive,
  codePreview
} from "@uiw/react-md-editor";

import Flex from "@components/atoms/Flex";

import { useError } from "@hooks/useError";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { getEditorStyle } from "@styles/getEditorStyles";

import { useChannel } from "@stores/channel.store";
import { useCreatStore } from "@stores/create.store";
import { useThemeStore } from "@stores/theme.store";

import { AuthError } from "@utils/AuthError";

import ArticleChannelSelect from "./ArticleChannelSelect";
import ArticleWriteButtons from "./ArticleWriteButtons";
import ArticleWriteTag from "./ArticleWriteTag";
import ArticleWriteTitle from "./ArticleWriteTitle";

const ArticleWrite = () => {
  const navigate = useNavigate();
  const { dispatchError } = useError();
  const { isLoggedIn } = useLoggedIn();
  const savedArticle = sessionStorage.getItem("create");
  let [savedTitle, savedTags, savedContent] = ["", [], ""];
  if (savedArticle) {
    const parse = JSON.parse(savedArticle).state.create;
    [savedTitle, savedTags, savedContent] = [
      parse.title,
      parse.tags,
      parse.content
    ];
  }

  const [channelId, setChannelId] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState(savedContent);
  const { theme } = useThemeStore();
  const { channel } = useChannel();
  const { setCreate } = useCreatStore();
  if (!isLoggedIn) dispatchError(new AuthError("로그인이 필요합니다."));

  const navigatePage = (page: string) => {
    switch (page) {
      case "CHANNEL":
        return navigate(`/channels/${channelId}`);
      case "BACK":
        return navigate(-1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      return setCreate({ title, tags, content });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [title, tags, content, setCreate]);

  return (
    <Flex
      direction="column"
      css={css`
        margin: 20px 20px 0 0;
      `}>
      <Helmet key={location.pathname}>
        <title>새 글 작성</title>
      </Helmet>
      <ArticleChannelSelect
        stateChange={(value) => setChannelId(value)}
        state={channel}
      />
      <ArticleWriteTitle
        stateChange={(value) => setTitle(value)}
        width="100%"
        savedTitle={savedTitle}
      />
      <ArticleWriteTag
        stateChange={(value) => setTags(value)}
        width="100%"
        savedTags={savedTags}
      />
      <div
        css={css`
          width: 100%;
        `}>
        <MDEditor
          data-color-mode={theme.type === "LIGHT" ? "light" : "dark"}
          preview="live"
          extraCommands={[codeEdit, codePreview, codeLive]}
          highlightEnable={false}
          height="calc(100vh - 270px)"
          value={content}
          onChange={(str) => setContent(str || "")}
          css={getEditorStyle(theme)}
        />
      </div>
      <ArticleWriteButtons
        theme={theme}
        navigatePage={navigatePage}
        totalContent={{ title, channelId, content, tags }}
        purpose="create"
      />
    </Flex>
  );
};

export default ArticleWrite;
