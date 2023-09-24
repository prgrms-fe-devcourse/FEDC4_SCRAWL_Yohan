import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Image from "@components/atoms/Image";
import UserInfo from "@components/molecules/UserInfo";

import { useThemeStore } from "@stores/theme.store";

import { Article } from "@type/models/Article";

import { PATH } from "@constants/index";

import { NoImage } from "@assets/svg";
import placeholderUser from "@assets/svg/placeholderUser.svg";

import { cardImgStyle, getCardOuterStyle, userInfoStyle } from "./Card.styles";
import CardFooter from "./CardFooter";

type CardProps = {
  article: Article;
};

const Card = ({ article }: CardProps) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();

  return (
    <Flex css={getCardOuterStyle(theme)} direction="column" gap={4}>
      <UserInfo
        imgWidth={24}
        imageSrc={article.author.image || placeholderUser}
        username={article.author.fullName}
        fontSize={14}
        css={userInfoStyle}
        onClick={() => navigate(PATH.USER(article.author._id))}
      />

      {article.image ? (
        <Image
          width={0}
          height={0}
          src={article.image}
          alt="contentImg"
          mode="cover"
          css={cardImgStyle}
          onClick={() => navigate(PATH.ARTICLE(article._id))}
        />
      ) : (
        <Flex
          align="center"
          justify="center"
          css={css`
            width: 100%;
            aspect-ratio: 16 / 10;
            cursor: pointer;
          `}
          onClick={() => navigate(PATH.ARTICLE(article._id))}>
          <Icon Svg={NoImage} size={70} fill={theme.BACKGROUND300} />
        </Flex>
      )}

      <CardFooter article={article} />
    </Flex>
  );
};

export default Card;
