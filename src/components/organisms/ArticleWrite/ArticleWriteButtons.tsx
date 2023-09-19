import toast from "react-hot-toast";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";

import { useArticleCreateMutation } from "@hooks/api/useArticleCreateMutation";

import { articleContentToArticleTitleData } from "@type/models/Article";

import { Theme } from "@constants/theme";

import { articleWriteButton } from "./ArticleWrite.styles";

type totalContentType = {
  title: string;
  channelId: string;
  content: string;
  tags: string[];
};

type ArticleWriteButtonsProps = {
  theme: Theme;
  navigatePage: (page: string) => void;
  totalContent: totalContentType;
};

const ArticleWriteButtons = ({
  theme,
  navigatePage,
  totalContent
}: ArticleWriteButtonsProps) => {
  const { mutate } = useArticleCreateMutation();
  const { title, channelId, content, tags } = totalContent;
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
    } else {
      toast.error("채널 선택과 제목 입력은 필수사항입니다.");
    }
  };
  return (
    <Flex css={articleWriteButton} justify="space-between">
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
  );
};

export default ArticleWriteButtons;
