import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Text from "@components/atoms/Text";

import { Article } from "@type/models/Article";

import { PATH } from "@constants/index";

import CardSlider from "./CardSlider";

type ArticlesByChannelSliderProps = {
  articles: Article[];
  channelName: string;
  channelId: string;
  sortType: "date" | "like";
};

const ArticlesByChannelSlider = ({
  articles,
  channelName,
  channelId,
  sortType
}: ArticlesByChannelSliderProps) => {
  const navigate = useNavigate();

  const filteredArticles = articles.filter(
    (article) => article.channel._id === channelId
  );
  if (sortType === "like") {
    const currentDate = new Date();
    const oneWeekAgo = new Date(
      currentDate.getTime() - 8 * 24 * 60 * 60 * 1000
    );
    filteredArticles.sort((a, b) => {
      if (
        new Date(a.createdAt) >= oneWeekAgo &&
        new Date(b.createdAt) >= oneWeekAgo
      ) {
        return b.likes.length - a.likes.length;
      } else if (
        new Date(a.createdAt) < oneWeekAgo &&
        new Date(b.createdAt) < oneWeekAgo
      ) {
        return b.likes.length - a.likes.length;
      } else if (
        new Date(a.createdAt) >= oneWeekAgo &&
        new Date(b.createdAt) < oneWeekAgo
      ) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  return (
    <Flex
      direction="column"
      css={css`
        width: 100%;
        gap: 10px;
      `}>
      <Text
        css={css`
          cursor: pointer;
        `}
        onClick={() => navigate(PATH.CHANNEL(channelId))}
        size={32}
        strong={true}>
        {channelName}
      </Text>
      {filteredArticles.length === 0 ? (
        <Text size={24}>채널에 글이 존재하지 않습니다.</Text>
      ) : (
        <CardSlider articles={filteredArticles}></CardSlider>
      )}
    </Flex>
  );
};

export default ArticlesByChannelSlider;
