import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";
import { Tags } from "@components/organisms/Tags";

import { useThemeStore } from "@stores/theme.store";

import {
  Article,
  articleTitleDataToArticleContent
} from "@type/models/Article";

import { PATH } from "@constants/index";

import { htmlToPlainText } from "@utils/htmlToPlainText";

import { Like, Message } from "@assets/svg";

import {
  cardDescriptionStyle,
  cardFoorterOuterStyle,
  contentStyle,
  tagsHeightStyle,
  titleStyle
} from "./CardFooter.styles";

type CardFooterProps = {
  article: Article;
};

const CardFooter = ({ article }: CardFooterProps) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();

  const {
    title,
    content: html,
    tags
  } = articleTitleDataToArticleContent(article.title);

  return (
    <Flex direction="column" gap={8} css={cardFoorterOuterStyle}>
      <Flex
        direction="column"
        gap={8}
        css={cardDescriptionStyle}
        onClick={() => navigate(PATH.ARTICLE(article._id))}>
        <Text size={16} strong={true} css={titleStyle}>
          {title}
        </Text>
        <Text size={14} css={contentStyle}>
          <div dangerouslySetInnerHTML={{ __html: htmlToPlainText(html) }} />
        </Text>
      </Flex>

      {tags.length === 0 ? (
        <div css={tagsHeightStyle}></div>
      ) : (
        <Tags tags={tags} />
      )}

      <Text
        size={12}
        color={theme.type === "DARK" ? theme.TEXT100 : theme.TEXT300}>
        {new Date(article.createdAt).toLocaleDateString()}
      </Text>

      <Flex
        justify="space-between"
        css={css`
          width: 100%;
        `}>
        <IconText
          iconValue={{ Svg: Like, fill: theme.TEXT300, size: 16 }}
          textValue={{
            children: article.likes.length,
            size: 12,
            color: theme.TEXT300
          }}
          css={css`
            gap: 5px;
          `}
        />
        <IconText
          iconValue={{ Svg: Message, fill: theme.TEXT300, size: 16 }}
          textValue={{
            children: article.comments.length,
            size: 12,
            color: theme.TEXT300
          }}
          css={css`
            gap: 5px;
          `}
        />
      </Flex>
    </Flex>
  );
};

export default CardFooter;
