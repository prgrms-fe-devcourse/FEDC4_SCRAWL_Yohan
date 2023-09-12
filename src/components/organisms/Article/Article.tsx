import { useNavigate, useParams } from "react-router-dom";

import DOMPurify from "dompurify";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";
import { Tags } from "@components/organisms/Tags";

import { useArticleQuery } from "@hooks/api/useArticleQuery";

import { useThemeStore } from "@stores/theme.store";

import { articleTitleDataToArticleContent } from "@type/models/Article";

import { PATH } from "@constants/index";

import { Like } from "@assets/svg";

import {
  articleOuterStyle,
  getArticleContetnStyle,
  getLikeIconTextStyle,
  getTextButtonStyle,
  headerLeftItemStyle,
  headerRightItemStyle,
  headerStyle,
  tagsStyle
} from "./Article.styles";

const Article = () => {
  const theme = useThemeStore((state) => state.theme);
  const { articleId } = useParams();
  const navigate = useNavigate();

  if (!articleId) {
    throw new Error("articleId is undefined");
  }

  const { article } = useArticleQuery(articleId);

  const {
    title,
    content: html,
    tags
  } = articleTitleDataToArticleContent(article.title);

  const sanitizedHTML = DOMPurify.sanitize(html);

  return (
    <Flex direction="column" gap={20} css={articleOuterStyle}>
      <Flex justify="space-between" css={headerStyle}>
        <Flex direction="column" gap={20} css={headerLeftItemStyle}>
          <Text size={32} strong={true}>
            {title}
          </Text>
          <Tags gap={10} size={16} tags={tags} css={tagsStyle} />
        </Flex>
        <Flex
          direction="column"
          align="end"
          gap={20}
          css={headerRightItemStyle}>
          <Flex gap={10}>
            <Text
              size={16}
              css={getTextButtonStyle(theme)}
              onClick={() => confirm("TODO 삭제 api 연결")}>
              삭제
            </Text>
            <Text
              size={16}
              css={getTextButtonStyle(theme)}
              onClick={() => navigate(PATH.EDIT_ARTICLE(article._id))}>
              수정
            </Text>
          </Flex>
          <IconText
            iconValue={{ Svg: Like }}
            textValue={{ size: 12, children: "110" }}
            css={getLikeIconTextStyle(theme)}
            onClick={() => confirm("TODO 좋아요 api 연결")}
          />
        </Flex>
      </Flex>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        css={getArticleContetnStyle(theme)}
      />
      <div>TODO: 댓글 리스트</div>
      <div>TODO: 댓글폼</div>
    </Flex>
  );
};

export default Article;
