import { ChangeEventHandler, MouseEventHandler, useState } from "react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Modal from "@components/atoms/Modal";
import { scrawlToast } from "@components/toast";

import { useArticleCreateMutation } from "@hooks/api/useArticleCreateMutation";
import { useArticleUpdateMutation } from "@hooks/api/useArticleUpdateMutation";

import { articleContentToArticleTitleData } from "@type/models/Article";

import { Theme } from "@constants/theme";

import { articleWriteButton } from "./ArticleWrite.styles";
import ThumnailChooseModal from "./ThumnailChooseModal";

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
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen((state) => !state);
  };

  const handleChangeImageFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.files) {
      return;
    }
    const currentFile = e.target.files[0];
    setImageFile(currentFile);
    const blobUrl = URL.createObjectURL(currentFile);
    setImageUrl(blobUrl);
  };

  const handleCreateArticle: MouseEventHandler<HTMLButtonElement> = () => {
    if (title && channelId) {
      {
        purpose === "create"
          ? cretateMutate({
              title: articleContentToArticleTitleData({
                title,
                content,
                tags
              }),
              image: imageFile,
              channelId: channelId
            })
          : updateMutate({
              postId: postId as string,
              title: articleContentToArticleTitleData({
                title,
                content,
                tags
              }),
              image: imageFile,
              channelId: channelId
            });
      }
      navigatePage("CHANNEL");
    } else if (!title && channelId) {
      scrawlToast.error("제목을 입력해 주세요.");
    } else if (title && !channelId) {
      scrawlToast.error("채널을 선택해 주세요.");
    } else {
      scrawlToast.error("채널 선택과 제목 입력은 필수사항입니다.");
    }
  };

  return (
    <Flex css={articleWriteButton} justify="space-between">
      <Button
        background="none"
        children="나가기"
        width="fit-content"
        height="30px"
        color={theme.TEXT600}
        onClick={() => navigatePage("BACK")}></Button>
      <Button
        children={purpose === "create" ? "생성" : "수정"}
        width="50px"
        height="30px"
        onClick={handleToggleModal}></Button>
      <Modal visible={isOpen}>
        <Modal.Background></Modal.Background>
        <Modal.Container
          onClose={handleToggleModal}
          children={
            <ThumnailChooseModal
              onImageChange={handleChangeImageFile}
              onButtonClick={handleCreateArticle}
              imageFile={imageFile}
              imageUrl={imageUrl}
            />
          }
        />
      </Modal>
    </Flex>
  );
};

export default ArticleWriteButtons;
