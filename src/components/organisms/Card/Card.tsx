import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Image from "@components/atoms/Image";
import Text from "@components/atoms/Text";
import UserInfo from "@components/molecules/UserInfo";

import { useChannelName } from "@hooks/useChannelName";

import { useThemeStore } from "@stores/theme.store";

import { Article } from "@type/models/Article";

import { PATH } from "@constants/index";

import { NoImage } from "@assets/svg";
import placeholderUser from "@assets/svg/placeholderUser.svg";

import { cardImgStyle, getCardOuterStyle, userInfoStyle } from "./Card.styles";
import CardFooter from "./CardFooter";

type CardProps = {
  article: Article;
  channelVisible?: boolean;
};

const Card = ({ article, channelVisible = false }: CardProps) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();
  const channelName = useChannelName(article.channel._id);

  return (
    <Flex css={getCardOuterStyle(theme)} direction="column" gap={4}>
      <Flex
        align="center"
        justify="space-between"
        css={css`
          width: 100%;
        `}>
        <UserInfo
          imgWidth={24}
          imageSrc={article.author.image || placeholderUser}
          username={article.author.fullName}
          fontSize={14}
          css={userInfoStyle}
          onClick={() => navigate(PATH.USER(article.author._id))}
        />
        {channelVisible && (
          <Text
            size={12}
            css={css`
              cursor: pointer;
              margin: 8px 12px 0 0;
              white-space: nowrap;
            `}
            onClick={() => navigate(PATH.CHANNEL(article.channel._id))}>
            {channelName}
          </Text>
        )}
      </Flex>

      {article.image ? (
        <Image
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
