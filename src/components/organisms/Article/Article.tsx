import { useParams } from "react-router-dom";

import { css } from "@emotion/react";
import DOMpurify from "dompurify";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";
import Tag from "@components/molecules/Tag";

import { useArticleQuery } from "@hooks/api/useArticleQuery";

import { useThemeStore } from "@stores/theme.store";

import { articleTitleDataToArticleContent } from "@type/models/Article";

import { Like } from "@assets/svg";

const Article = () => {
  const theme = useThemeStore((state) => state.theme);
  const { articleId } = useParams();

  if (!articleId) {
    throw new Error("articleId is undefined");
  }

  const { article } = useArticleQuery(articleId);

  const {
    title,
    content: html,
    tags
  } = articleTitleDataToArticleContent(article.title);

  const sanitizedHTML = DOMpurify.sanitize(html);

  return (
    <Flex
      direction="column"
      gap={20}
      css={css`
        min-width: 500px;
        max-width: 1000px;
        margin: 20px 20px 0 0;
      `}>
      <Flex
        justify="space-between"
        css={css`
          width: 100%;
        `}>
        <Flex
          direction="column"
          gap={20}
          css={css`
            width: calc(100% - 100px);
          `}>
          <Text size={32} strong={true}>
            {title}
          </Text>
          <Flex
            gap={5}
            css={css`
              flex-wrap: wrap;
            `}>
            {tags.map((tag, i) => (
              <Tag key={`${tag}${i}`} size={16} name={tag} />
            ))}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          align="end"
          gap={20}
          css={css`
            white-space: nowrap;
          `}>
          <Flex gap={10}>
            <Text
              size={16}
              css={css`
                cursor: pointer;
              `}>
              삭제
            </Text>
            <Text
              size={16}
              css={css`
                cursor: pointer;
              `}>
              수정
            </Text>
          </Flex>
          <IconText
            iconValue={{ Svg: Like }}
            textValue={{ size: 12, children: "110" }}
            css={css`
              gap: 5px;
            `}
          />
        </Flex>
      </Flex>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        css={css`
          min-height: 500px;
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: ${theme.SHADOW};
          padding: 10px;
        `}
      />
      <div>TODO: 댓글 리스트</div>
      <div>TODO: 댓글폼</div>
    </Flex>
  );
};

export default Article;
