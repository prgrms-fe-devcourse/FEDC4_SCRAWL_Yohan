import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import UserInfo from "@components/molecules/UserInfo";

import { useThemeStore } from "@stores/theme.store";

import { Article } from "@type/models/Article";

import { MIN_CARD_WIDTH } from "@constants/card";
import { PATH } from "@constants/index";

import placeholderUser from "@assets/svg/placeholderUser.svg";

import { cardImgStyle, getCardOuterStyle, userInfoStyle } from "./Card.styles";
import CardFooter from "./CardFooter";

type CardProps = {
  width: number;
  article: Article;
};

const Card = ({ article, width: w }: CardProps) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();

  const width = Math.max(w, MIN_CARD_WIDTH);

  return (
    <Flex css={getCardOuterStyle(theme, width)} direction="column" gap={4}>
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
          width={width}
          height={width * 0.6}
          src={article.image}
          alt="contentImg"
          mode="cover"
          css={cardImgStyle}
          onClick={() => navigate(PATH.ARTICLE(article._id))}
        />
      ) : (
        <div
          css={css`
            width: ${width}px;
            height: ${width * 0.6}px;
            cursor: pointer;
          `}
          onClick={() => navigate(PATH.ARTICLE(article._id))}
        />
      )}

      <CardFooter article={article} />
    </Flex>
  );
};

export default Card;
