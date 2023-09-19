import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";

import { useError } from "@hooks/useError";
import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";

import { AuthError } from "@utils/AuthError";

import ArticleChannelSelect from "./ArticleChannelSelect";
import ArticleWriteButtons from "./ArticleWriteButtons";
import ArticleWriteEditor from "./ArticleWriteEditor";
import ArticleWriteTag from "./ArticleWriteTag";
import ArticleWriteTitle from "./ArticleWriteTitle";

const ArticleWrite = () => {
  const navigate = useNavigate();
  const { dispatchError } = useError();
  const { isLoggedIn } = useLoggedIn();
  const [channelId, setChannelId] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState("");
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

export default ArticleWrite;
