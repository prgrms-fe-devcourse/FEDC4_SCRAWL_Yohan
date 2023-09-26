import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Modal from "@components/atoms/Modal";
import Text from "@components/atoms/Text";
import ConfirmModal from "@components/molecules/ConfirmModal";
import IconText from "@components/molecules/IconText";
import { Tags } from "@components/organisms/Tags";
import { scrawlToast } from "@components/toast";

import { useArticleDeleteMutation } from "@hooks/api/useArticleDeleteMutation";
import { useLikeCreateMutation } from "@hooks/api/useLikeCreateMutation";
import { useLikeDeleteMutation } from "@hooks/api/useLikeDeleteMutation";
import { useNotificationCreateMutation } from "@hooks/api/useNotificationCreateMutation";
import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";
import { useChannelName } from "@hooks/useChannelName";

import { useThemeStore } from "@stores/theme.store";

import { Article } from "@type/models/Article";

import { PATH } from "@constants/index";

import { Like } from "@assets/svg";

import {
  getLikeIconTextStyle,
  getTextButtonStyle,
  headerLeftItemStyle,
  headerRightItemStyle,
  headerStyle,
  tagsStyle
} from "./ArticleHeader.styles";

type ArticleHeaderProps = {
  article: Article;
  tags: string[];
  title: string;
};

const ArticleHeader = ({ article, tags, title }: ArticleHeaderProps) => {
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();
  const { data: myInfo } = useUserByTokenQuery();
  const [isOpen, setIsOpen] = useState(false);
  const channelName = useChannelName(article.channel._id);

  const isMyArticle = myInfo?._id === article.author._id;
  const myLike = article.likes.find(({ user }) => user === myInfo?._id);

  const { mutate: likeCreateMutate, isLoading: isLikeCreateLoading } =
    useLikeCreateMutation();
  const { mutate: likeDeleteMutate, isLoading: isLikeDeleteLoading } =
    useLikeDeleteMutation();
  const { mutate: articleDeleteMutate } = useArticleDeleteMutation();
  const { mutate: notificationCreateMutate } = useNotificationCreateMutation();

  const toggleLikeMutate = () => {
    if (myLike) {
      likeDeleteMutate(myLike._id);
    } else {
      likeCreateMutate(article._id, {
        onSuccess: (newLike) =>
          notificationCreateMutate({
            notificationType: "LIKE",
            notificationTypeId: newLike._id,
            postId: newLike.post,
            userId: article.author._id
          })
      });
    }
  };

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteArticle = () => {
    if (isMyArticle) {
      articleDeleteMutate(article._id, {
        onSuccess: (article) => {
          navigate(PATH.CHANNEL(article.channel), { replace: true });
        }
      });
    }
  };

  const handleLikeButtonClick = () => {
    if (isLikeCreateLoading || isLikeDeleteLoading) {
      return;
    }
    if (!myInfo) {
      scrawlToast.error("로그인이 필요한 서비스입니다.");
    } else {
      toggleLikeMutate();
    }
  };

  return (
    <Flex justify="space-between" css={headerStyle}>
      <Flex direction="column" gap={10} css={headerLeftItemStyle}>
        <Text
          size={16}
          color={theme.TEXT300}
          css={css`
            cursor: pointer;
          `}
          onClick={() => navigate(PATH.CHANNEL(article.channel._id))}>
          {channelName}
        </Text>
        <Text size={32} strong={true}>
          {title}
        </Text>
        <Tags gap={10} size={16} tags={tags} css={tagsStyle} />
      </Flex>
      <Flex direction="column" align="end" gap={20} css={headerRightItemStyle}>
        <Flex gap={10}>
          <Text
            size={16}
            css={getTextButtonStyle(theme, isMyArticle)}
            onClick={handleToggleModal}>
            삭제
          </Text>
          <Text
            size={16}
            css={getTextButtonStyle(theme, isMyArticle)}
            onClick={() => navigate(PATH.EDIT_ARTICLE(article._id))}>
            수정
          </Text>
        </Flex>
        <IconText
          iconValue={{ Svg: Like, fill: myLike ? theme.SECONDARY : undefined }}
          textValue={{ size: 12, children: article.likes.length }}
          css={getLikeIconTextStyle(theme, isMyArticle)}
          onClick={handleLikeButtonClick}
        />
      </Flex>
      <Modal visible={isOpen}>
        <Modal.Background></Modal.Background>
        <Modal.Container
          onClose={handleToggleModal}
          children={
            <ConfirmModal
              message="정말 글을 삭제하시겠습니까?"
              subMessage="다시 한번 확인해 보세요!"
              onYesButtonClick={handleDeleteArticle}
              onNoButtonClick={handleToggleModal}
            />
          }
        />
      </Modal>
    </Flex>
  );
};

export default ArticleHeader;
