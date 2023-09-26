import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";
import UserInfo from "@components/molecules/UserInfo";

import { useChannelName } from "@hooks/useChannelName";

import { useThemeStore } from "@stores/theme.store";

import {
  Article,
  articleTitleDataToArticleContent
} from "@type/models/Article";

import { PATH } from "@constants/index";

import placeholderUser from "@assets/svg/placeholderUser.svg";

const SearchItem = ({
  article,
  onClick
}: {
  article: Article;
  onClick: () => void;
}) => {
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();
  const channelName = useChannelName(article.channel._id);

  const { title } = articleTitleDataToArticleContent(article.title);

  return (
    <Flex
      align="center"
      justify="space-between"
      onClick={() => {
        onClick();
        navigate(PATH.ARTICLE(article._id));
      }}
      css={css`
        box-sizing: border-box;
        width: 100%;
        border-radius: 8px;
        gap: 10px;
        padding: 10px;
        cursor: pointer;
        :hover {
          background-color: ${theme.BACKGROUND200};
        }
      `}>
      <Flex direction="column">
        <Text size={12} color={theme.TEXT300}>
          {channelName}
        </Text>
        <Text
          size={20}
          strong={true}
          css={css`
            width: 300px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          `}>
          {title}
        </Text>
      </Flex>
      <UserInfo
        imageSrc={article.author.image || placeholderUser}
        imgWidth={30}
        username=""
        fontSize={12}
      />
    </Flex>
  );
};

export default SearchItem;
