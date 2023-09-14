import { useParams } from "react-router-dom";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import CommentForm from "@components/molecules/CommentForm";
import IconText from "@components/molecules/IconText";
import CommentBox from "@components/organisms/CommentBox";

import { useArticleByArticlelIdQuery } from "@hooks/api/useArticleByArticleIdQuery";

import { useThemeStore } from "@stores/theme.store";

import { articleTitleDataToArticleContent } from "@type/models/Article";

import { Like } from "@assets/svg";
import placeholderUser from "@assets/svg/placeholderUser.svg";

const QuestionPage = () => {
  const theme = useThemeStore((state) => state.theme);
  const { questionId } = useParams();

  if (!questionId) {
    throw new Error("There is no questionId!");
  }

  const { data } = useArticleByArticlelIdQuery(questionId);

  if (!data) {
    throw new Error("There is no data!");
  }
  const { likes, author, comments } = data;
  const { title, content, tags } = articleTitleDataToArticleContent(data.title);
  return (
    <Flex
      direction="column"
      css={css`
        margin-top: 50px;
        width: 960px;
      `}>
      <Flex
        direction="column"
        css={css`
          width: 100%;
        `}>
        <Flex
          justify="space-between"
          css={css`
            width: 100%;
            margin-bottom: 20px;
          `}>
          <Flex>
            <Text size={32}>{title}</Text>
          </Flex>
          <Flex>
            <Button
              width="40px"
              height="15px"
              background="none"
              color={theme.TEXT600}
              fontSize="16px">
              삭제
            </Button>
            <Button
              width="40px"
              height="15px"
              background="none"
              color={theme.TEXT600}
              fontSize="16px">
              수정
            </Button>
          </Flex>
        </Flex>
        <Flex
          justify="space-between"
          css={css`
            width: 100%;
            margin-bottom: 20px;
          `}>
          <Flex>
            {tags.map((item, index) => (
              <Text
                key={index}
                children={`#${item.replace(/_/g, "")}`}
                size={16}
                color={theme.PRIMARY}
                css={css`
                  margin-right: 10px;
                `}
              />
            ))}
          </Flex>
          <IconText
            iconValue={{ Svg: Like, fill: theme.TEXT300, size: 16 }}
            textValue={{
              children: likes.length,
              size: 12,
              color: theme.TEXT300
            }}></IconText>
        </Flex>
      </Flex>
      <CommentBox
        imageSrc={author.image || placeholderUser}
        questionAuthorName={author.fullName}
        questionContent={content}
      />
      <Flex
        direction="column"
        css={css`
          margin-top: 20px;
          gap: 20px;
          width: 100%;
        `}>
        {comments.map(({ _id, author, comment }) => (
          <CommentBox
            key={_id}
            imageSrc={author.image || placeholderUser}
            questionAuthorName={author.fullName}
            questionContent={comment}
          />
        ))}
      </Flex>
      <CommentForm width="100%" articleId={questionId}></CommentForm>
    </Flex>
  );
};

export default QuestionPage;
