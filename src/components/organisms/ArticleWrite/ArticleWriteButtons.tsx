import { useState } from "react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Modal from "@components/atoms/Modal";
import { scrawlToast } from "@components/toast";

import { useArticleCreateMutation } from "@hooks/api/useArticleCreateMutation";
import { useArticleUpdateMutation } from "@hooks/api/useArticleUpdateMutation";

import { articleContentToArticleTitleData } from "@type/models/Article";

import { Theme } from "@constants/theme";

import { extractImageUrls } from "@utils/extractImageUrls";
import { urlToImageFile } from "@utils/urlToImageFile";

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
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [thumnailUrl, setThumnailUrl] = useState("");

  const handleToggleModal = () => {
    setIsOpen((state) => !state);
  };

  const handleOpenThumnailSelectModal = () => {
    handleToggleModal();
    const filteredUrls = extractImageUrls(totalContent.content).filter(
      (_, index) => index < 3
    );
    setImageUrls(filteredUrls);
  };

  const handleSelectThumnail = (imageUrl: string) => {
    setThumnailUrl(imageUrl);
  };

  const handleCreateArticle = (file: File | null) => {
    if (title && channelId) {
      {
        purpose === "create"
          ? cretateMutate({
              title: articleContentToArticleTitleData({
                title,
                content,
                tags
              }),
              image: file,
              channelId: channelId
            })
          : updateMutate({
              postId: postId as string,
              title: articleContentToArticleTitleData({
                title,
                content,
                tags
              }),
              image: file,
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

  const handleCreateArticleWithThumnail = async () => {
    if (thumnailUrl === "" && imageUrls.length === 0) {
      handleCreateArticle(null);
      return;
    }

    if (thumnailUrl === "") {
      scrawlToast.error("썸네일을 선택해주세요.");
      return;
    }
    try {
      const file = await urlToImageFile(thumnailUrl, `${title}_thumnail.jpg`);
      handleCreateArticle(file);
    } catch (e) {
      console.error(e);
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
        onClick={handleOpenThumnailSelectModal}></Button>
      <Modal visible={isOpen}>
        <Modal.Background></Modal.Background>
        <Modal.Container
          onClose={handleToggleModal}
          children={
            <ThumnailChooseModal
              onImageClick={handleSelectThumnail}
              onButtonClick={handleCreateArticleWithThumnail}
              imageUrls={imageUrls}
              thumnailUrl={thumnailUrl}
            />
          }
        />
      </Modal>
    </Flex>
  );
};

export default ArticleWriteButtons;
