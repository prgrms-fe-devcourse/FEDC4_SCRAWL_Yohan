import { ChangeEventHandler, useState } from "react";

import { css } from "@emotion/react";
import { useMutation } from "@tanstack/react-query";

import { createComment } from "@apis/comment/createComment";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import Input from "@components/atoms/Input";

import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useThemeStore } from "@stores/theme.store";

import placeholderUser from "@assets/svg/placeholderUser.svg";

type CommentFormProps = {
  width: string;
  articleId: string;
};

const CommentForm = ({ width, articleId }: CommentFormProps) => {
  const [comment, setComment] = useState("");
  const theme = useThemeStore((state) => state.theme);
  const mutation = useMutation({ mutationFn: createComment });
  const { data } = useUserByTokenQuery();

  const handleUpdateCommentText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setComment(e.currentTarget.value);
  };
  const handleSubmitComment = () => {
    mutation.mutate({ comment, postId: articleId });
    setComment("");
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
        <Input
          onChange={handleUpdateCommentText}
          value={comment}
          width={"75%"}
          height={"96px"}
          fontSize={"16px"}
          background={theme.BACKGROUND100}
          color={theme.TEXT600}
          border={`1px solid ${theme.BORDER100}`}
          borderRadius={"8px"}
          type={"text"}
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
            REPLY
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CommentForm;
