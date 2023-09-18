import DOMPurify from "dompurify";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import UserInfo from "@components/molecules/UserInfo";

import { useCommentDeleteMutation } from "@hooks/api/useCommentDeleteMutation";
import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useThemeStore } from "@stores/theme.store";

import {
  Article,
  articleTitleDataToArticleContent
} from "@type/models/Article";
import { Comment } from "@type/models/Comment";

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

  const getIsComment = (data: Comment | Article): data is Comment => {
    return "comment" in data;
  };

  const htmlContent = getIsComment(data)
    ? data.comment
    : articleTitleDataToArticleContent(data.title).content;

  const sanitizedHTML = DOMPurify.sanitize(htmlContent);

  return (
    <Flex justify="center" align="center" css={getThreadOuterStyle(theme)}>
      <Flex direction="column" css={threadInnerStyle}>
        <Flex justify="space-between" css={threadHeaderStyle}>
          <UserInfo
            imageSrc={author.image || placeholderUser}
            imgWidth={40}
            username={author.fullName}
            fontSize={16}
            css={getThreadUserInfoStyle(theme)}
          />
          {getIsComment(data) && (
            <Text
              size={16}
              onClick={() => commentDeleteMutate({ id: data._id })}
              css={getThreadDeleteBtnStyle(user?._id === data.author._id)}>
              삭제
            </Text>
          )}
        </Flex>

        <Flex css={getThreadContentStyle(theme)}>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Thread;
