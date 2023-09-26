import { useState } from "react";

import { css } from "@emotion/react";
import MDEditor, {
  codeEdit,
  codeLive,
  codePreview
} from "@uiw/react-md-editor";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import { scrawlToast } from "@components/toast";

import { useCommentCreateMutation } from "@hooks/api/useCommentCreateMutation";
import { useNotificationCreateMutation } from "@hooks/api/useNotificationCreateMutation";
import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { getEditorStyle } from "@styles/getEditorStyles";

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

  const handleSubmitComment = () => {
    if (comment === "") {
      scrawlToast.error("댓글에 내용을 입력해주세요.");
      return;
    }
    commentCreateMutate(
      { comment, postId: article._id },
      {
        onSuccess: (newComment) => {
          setComment("");
          if (article.author._id !== data?._id) {
            notificationCreateMutate({
              notificationType: "COMMENT",
              notificationTypeId: newComment._id,
              postId: newComment.post,
              userId: article.author._id
            });
          }
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
        padding: 20px 0;
        height: 100%;
        border-radius: 8px;
        box-shadow: ${theme.SHADOW};
        background: ${theme.BACKGROUND100};
        border: 1px solid ${theme.BORDER100};
        margin-top: 20px;
      `}>
      <Flex
        css={css`
          width: 95%;
          height: 100%;
          gap: 20px;
        `}>
        <Flex direction={"column"} justify={"space-between"} css={css``}>
          <Image
            src={(data && data?.image) || placeholderUser}
            width={40}
            height={40}
            mode={"cover"}
            css={css`
              border: 1px solid var(--border-color);
              border-radius: 50%;
            `}
            alt={"이미지가 없습니다."}
          />
        </Flex>
        <MDEditor
          data-color-mode={theme.type === "LIGHT" ? "light" : "dark"}
          preview="live"
          extraCommands={[codeEdit, codePreview, codeLive]}
          height={100}
          highlightEnable={false}
          value={comment}
          onChange={(str) => setComment(str || "")}
          css={getEditorStyle(theme)}
        />
        <Button
          onClick={handleSubmitComment}
          width={"106px"}
          height={"48px"}
          fontSize={"16px"}
          background={theme.PRIMARY}
          borderRadius={"8px"}
          css={css`
            align-self: self-end;
          `}>
          댓글 쓰기
        </Button>
      </Flex>
    </Flex>
  );
};

export default CommentForm;
