import { useNavigate, useParams } from "react-router-dom";

import DOMPurify from "dompurify";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";
import { Tags } from "@components/organisms/Tags";

import { useArticleDeleteMutation } from "@hooks/api/useArticleDeleteMutation";
import { useArticleQuery } from "@hooks/api/useArticleQuery";
import { useLikeCreateMutation } from "@hooks/api/useLikeCreateMutation";
import { useLikeDeleteMutation } from "@hooks/api/useLikeDeleteMutation";
import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

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
  const { articleId } = useParams();
  if (!articleId) {
    throw new Error("articleId is undefined");
  }

  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();
  const { article } = useArticleQuery(articleId);
  const { data: myInfo } = useUserByTokenQuery();
  const { mutate: likeCreateMutate } = useLikeCreateMutation();
  const { mutate: likeDeleteMutate } = useLikeDeleteMutation();
  const { mutate: articleDeleteMutate } = useArticleDeleteMutation();

  const {
    title,
    content: html,
    tags
  } = articleTitleDataToArticleContent(article.title);

  const sanitizedHTML = DOMPurify.sanitize(html);
  const isMyArticle = myInfo?._id === article.author._id;
  const myLike = article.likes.find(({ user }) => user === myInfo?._id);

  const toggleLikeMutate = () => {
    if (myLike) {
      likeDeleteMutate(myLike._id);
    } else {
      likeCreateMutate(articleId);
    }
  };

  const handleDeleteButtonClick = () => {
    if (isMyArticle && confirm("게시글을 삭제하시겠습니까?")) {
      articleDeleteMutate(articleId, {
        onSuccess: (article) => {
          navigate(PATH.CHANNEL(article.channel), { replace: true });
        }
      });
    }
  };

  const handleLikeButtonClick = () => {
    if (!myInfo) {
      alert("로그인이 필요한 서비스입니다.");
    } else {
      toggleLikeMutate();
    }
  };

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
              css={getTextButtonStyle(theme, isMyArticle)}
              onClick={handleDeleteButtonClick}>
              삭제
            </Text>
            <Text
              size={16}
              css={getTextButtonStyle(theme, isMyArticle)}
              onClick={() => navigate(PATH.EDIT_ARTICLE(articleId))}>
              수정
            </Text>
          </Flex>
          <IconText
            iconValue={{ Svg: Like, fill: myLike ? "red" : undefined }}
            textValue={{ size: 12, children: article.likes.length }}
            css={getLikeIconTextStyle(theme, isMyArticle)}
            onClick={handleLikeButtonClick}
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
