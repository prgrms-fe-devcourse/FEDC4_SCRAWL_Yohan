import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";

import { Article } from "@type/models/Article";

import { WIDTH_MAP } from "@constants/media";

import { Next, Prev } from "@assets/svg";

import { Card } from "../Card";
import { getCardSliderStyle } from "./ArticlesByChannelSlider.style";

const CardSlider = ({ articles }: { articles: Article[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const offset = useRef(4);

  const [, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      if (innerWidth >= WIDTH_MAP.sm && innerWidth < WIDTH_MAP.md) {
        offset.current = 2;
      }
      if (innerWidth >= WIDTH_MAP.md && innerWidth < WIDTH_MAP.lg) {
        offset.current = 3;
      }
      if (innerWidth >= WIDTH_MAP.lg) {
        offset.current = 4;
      }

      setTotalPage(Math.ceil(articles.length / offset.current));
      setWindowWidth(window.innerWidth);
      setCurrentPage(1);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [articles.length]);

  const filteredArticles = articles.filter(
    (_, index) =>
      index >= (currentPage - 1) * offset.current &&
      index < currentPage * offset.current
  );

  return (
    <Flex
      css={css`
        width: 100%;
        align-items: center;
      `}>
      <Icon
        size={36}
        css={css`
          cursor: pointer;
          visibility: ${currentPage === 1 && "hidden"};
        `}
        onClick={() => setCurrentPage(currentPage - 1)}
        Svg={Prev}
      />
      <div css={getCardSliderStyle(offset.current)}>
        {filteredArticles.map((article, index) => (
          <Card key={index} article={article} />
        ))}
      </div>
      <Icon
        size={36}
        css={css`
          cursor: pointer;
          visibility: ${currentPage === totalPage && "hidden"};
        `}
        onClick={() => setCurrentPage(currentPage + 1)}
        Svg={Next}
      />
    </Flex>
  );
};

export default CardSlider;
