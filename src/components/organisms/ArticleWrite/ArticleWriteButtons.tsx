import toast from "react-hot-toast";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";

import { useArticleCreateMutation } from "@hooks/api/useArticleCreateMutation";
import { useArticleUpdateMutation } from "@hooks/api/useArticleUpdateMutation";

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
  postId?: string;
  purpose: string;
};

const ArticleWriteButtons = ({
  theme,
  navigatePage,
  totalContent,
  postId,
  purpose
}: ArticleWriteButtonsProps) => {
  const { mutate: cretateMutate } = useArticleCreateMutation();
  const { mutate: updateMutate } = useArticleUpdateMutation();
  const { title, channelId, content, tags } = totalContent;
  const handleCreateButtonClick = () => {
    if (title && channelId) {
      {
        purpose === "create"
          ? cretateMutate({
              title: articleContentToArticleTitleData({
                title,
                content,
                tags
              }),
              channelId: channelId
            })
          : updateMutate({
              postId: postId as string,
              title: articleContentToArticleTitleData({
                title,
                content,
                tags
              }),
              channelId: channelId
            });
      }
      navigatePage("CHANNEL");
    } else if (!title && channelId) {
      toast.error("제목을 입력해 주세요.");
    } else if (title && !channelId) {
      toast.error("채널을 선택해 주세요.");
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
        children={purpose === "create" ? "생성" : "수정"}
        width="50px"
        height="30px"
        onClick={handleCreateButtonClick}></Button>
    </Flex>
  );
};

export default ArticleWriteButtons;
