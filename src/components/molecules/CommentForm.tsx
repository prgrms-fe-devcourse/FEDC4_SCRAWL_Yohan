import { useState } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import ArticleWriteEditor from "@components/organisms/ArticleWrite/ArticleWriteEditor";

import { useCommentCreateMutation } from "@hooks/api/useCommentCreateMutation";
import { useNotificationCreateMutation } from "@hooks/api/useNotificationCreateMutation";
import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useThemeStore } from "@stores/theme.store";

import { Article } from "@type/models/Article";

import placeholderUser from "@assets/svg/placeholderUser.svg";

type CommentFormProps = {
  width: string;
  article: Article;
};

const CommentForm = ({ width, article }: CommentFormProps) => {
  const [comment, setComment] = useState("");
  const theme = useThemeStore((state) => state.theme);
  const { mutate: commentCreateMutate } = useCommentCreateMutation();
  const { mutate: notificationCreateMutate } = useNotificationCreateMutation();

  const { data } = useUserByTokenQuery();

  const handleUpdateCommentText = (value: string) => {
    setComment(value);
  };
  const handleSubmitComment = () => {
    commentCreateMutate(
      { comment, postId: article._id },
      {
        onSuccess: (newComment) => {
          setComment("");
          notificationCreateMutate({
            notificationType: "COMMENT",
            notificationTypeId: newComment._id,
            postId: newComment.post,
            userId: article.author._id
          });
        }
      }
    );
  };

  return (
    <Flex
      justify="center"
      align="center"
      css={css`
        width: ${width};
        height: 144px;
        border-radius: 8px;
        box-shadow: ${theme.SHADOW};
        background: ${theme.BACKGROUND100};
        border: 1px solid ${theme.BORDER100};
        margin-top: 20px;
      `}>
      <Flex
        justify="center"
        align="center"
        css={css`
          width: 95%;
          gap: 20px;
          height: 96px;
        `}>
        <Flex
          direction={"column"}
          justify={"start"}
          css={css`
            height: 100%;
          `}>
          <Image
            src={(data && data?.image) || placeholderUser}
            width={40}
            height={40}
            mode={"cover"}
            css={css`
              border-radius: 50%;
            `}
            alt={"이미지가 없습니다."}
          />
        </Flex>
        <ArticleWriteEditor
          stateChange={(value) => handleUpdateCommentText(value)}
          width="75%"
        />
        <Flex
          direction={"column"}
          justify={"end"}
          css={css`
            height: 100%;
          `}>
          <Button
            onClick={handleSubmitComment}
            width={"106px"}
            height={"48px"}
            fontSize={"16px"}
            color={theme.TEXT100}
            background={theme.PRIMARY}
            borderRadius={"8px"}>
            댓글 쓰기
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CommentForm;
