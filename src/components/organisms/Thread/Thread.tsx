import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DOMPurify from "dompurify";

import Flex from "@components/atoms/Flex";
import Modal from "@components/atoms/Modal";
import Text from "@components/atoms/Text";
import ConfirmModal from "@components/molecules/ConfirmModal";
import UserInfo from "@components/molecules/UserInfo";

import { useCommentDeleteMutation } from "@hooks/api/useCommentDeleteMutation";
import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useThemeStore } from "@stores/theme.store";

import {
  Article,
  articleTitleDataToArticleContent
} from "@type/models/Article";
import { Comment } from "@type/models/Comment";

import { PATH } from "@constants/index";

import placeholderUser from "@assets/svg/placeholderUser.svg";

import {
  getThreadContentStyle,
  getThreadDeleteBtnStyle,
  getThreadOuterStyle,
  getThreadUserInfoStyle,
  threadHeaderStyle,
  threadInnerStyle
} from "./Thread.styles";

type ThreadProps = {
  data: Comment | Article;
};

const Thread = ({ data }: ThreadProps) => {
  const theme = useThemeStore((state) => state.theme);
  const { data: user } = useUserByTokenQuery();
  const { mutate: commentDeleteMutate } = useCommentDeleteMutation();
  const { author } = data;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const getIsComment = (data: Comment | Article): data is Comment => {
    return "comment" in data;
  };

  const htmlContent = getIsComment(data)
    ? data.comment
    : articleTitleDataToArticleContent(data.title).content;

  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  const handleMoveUserPage = (userId: string) => {
    navigate(PATH.USER(userId));
  };
  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleDeleteComment = () => {
    commentDeleteMutate({ id: data._id });
  };

  return (
    <Flex justify="center" align="center" css={getThreadOuterStyle(theme)}>
      <Flex direction="column" css={threadInnerStyle}>
        <Flex justify="space-between" css={threadHeaderStyle}>
          <UserInfo
            onClick={() => handleMoveUserPage(author._id)}
            imageSrc={author.image || placeholderUser}
            imgWidth={40}
            username={author.fullName}
            fontSize={16}
            css={getThreadUserInfoStyle(theme)}
          />
          {getIsComment(data) && (
            <Text
              size={16}
              onClick={handleToggleModal}
              css={getThreadDeleteBtnStyle(user?._id === data.author._id)}>
              삭제
            </Text>
          )}
          <Modal visible={isOpen}>
            <Modal.Background></Modal.Background>
            <Modal.Container
              onClose={handleToggleModal}
              children={
                <ConfirmModal
                  message="정말 댓글을 삭제하시겠습니까?"
                  subMessage="다시 한번 확인해 보세요!"
                  onYesButtonClick={handleDeleteComment}
                  onNoButtonClick={handleToggleModal}
                />
              }
            />
          </Modal>
        </Flex>

        <Flex css={getThreadContentStyle(theme)}>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Thread;
