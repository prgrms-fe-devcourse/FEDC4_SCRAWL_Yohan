import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Text from "@components/atoms/Text";

import { Article } from "@type/models/Article";

import { WIDTH_MAP } from "@constants/media";

import { Next } from "@assets/svg";

import { CardSkeleton } from "../Card";
import { getCardSliderStyle } from "./ArticlesByChannelSlider.style";

const CardSliderSkeleton = ({
  articles,
  channelName
}: {
  articles: Article[];
  channelName: string;
}) => {
  const offset = useRef(getOffset(window.innerWidth));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      offset.current = getOffset(windowWidth);
      setWindowWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [articles.length, windowWidth]);

  return (
    <Flex
      direction="column"
      css={css`
        width: 100%;
        gap: 10px;
      `}>
      <Text
        css={css`
          margin-left: 36px;
        `}
        size={32}
        strong={true}>
        {channelName}
      </Text>
      <Flex
        css={css`
          margin-left: 36px;
          width: 100%;
          align-items: center;
        `}>
        <div css={getCardSliderStyle(offset.current)}>
          {Array(offset.current)
            .fill(null)
            .map((_, i) => (
              <CardSkeleton key={i} />
            ))}
        </div>
        <Icon size={36} Svg={Next} />
      </Flex>
    </Flex>
  );
};

export default CardSliderSkeleton;

const getOffset = (width: number) => {
  if (width < WIDTH_MAP.sm) {
    return 2;
  }
  if (width >= WIDTH_MAP.sm && width < WIDTH_MAP.md) {
    return 2;
  }
  if (width >= WIDTH_MAP.md && width < WIDTH_MAP.lg) {
    return 3;
  }
  return 4;
};
