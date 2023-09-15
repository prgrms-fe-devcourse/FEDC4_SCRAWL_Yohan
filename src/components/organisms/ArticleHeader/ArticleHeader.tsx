import { useNavigate } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";
import { Tags } from "@components/organisms/Tags";

import { useArticleDeleteMutation } from "@hooks/api/useArticleDeleteMutation";
import { useLikeCreateMutation } from "@hooks/api/useLikeCreateMutation";
import { useLikeDeleteMutation } from "@hooks/api/useLikeDeleteMutation";
import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useThemeStore } from "@stores/theme.store";

import { Article } from "@type/models/Article";

import { PATH } from "@constants/index";

import { Like } from "@assets/svg";

import {
  getLikeIconTextStyle,
  getTextButtonStyle,
  headerLeftItemStyle,
  headerRightItemStyle,
  headerStyle,
  tagsStyle
} from "./ArticleHeader.styles";

type ArticleHeaderProps = {
  article: Article;
  tags: string[];
  title: string;
};

const ArticleHeader = ({ article, tags, title }: ArticleHeaderProps) => {
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();
  const { data: myInfo } = useUserByTokenQuery();

  const isMyArticle = myInfo?._id === article.author._id;
  const myLike = article.likes.find(({ user }) => user === myInfo?._id);

  const { mutate: likeCreateMutate } = useLikeCreateMutation();
  const { mutate: likeDeleteMutate } = useLikeDeleteMutation();
  const { mutate: articleDeleteMutate } = useArticleDeleteMutation();

  const toggleLikeMutate = () => {
    if (myLike) {
      likeDeleteMutate(myLike._id);
    } else {
      likeCreateMutate(article._id);
    }
  };

  const handleDeleteButtonClick = () => {
    if (isMyArticle && confirm("게시글을 삭제하시겠습니까?")) {
      articleDeleteMutate(article._id, {
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
    <Flex justify="space-between" css={headerStyle}>
      <Flex direction="column" gap={20} css={headerLeftItemStyle}>
        <Text size={32} strong={true}>
          {title}
        </Text>
        <Tags gap={10} size={16} tags={tags} css={tagsStyle} />
      </Flex>
      <Flex direction="column" align="end" gap={20} css={headerRightItemStyle}>
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
            onClick={() => navigate(PATH.EDIT_ARTICLE(article._id))}>
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
  );
};

export default ArticleHeader;
