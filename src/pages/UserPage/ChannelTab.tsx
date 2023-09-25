import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { useThemeStore } from "@stores/theme.store";

import { Next, Prev } from "@assets/svg";

import {
  tabNavbarStyle,
  tabScrollBtnOuterStyle,
  tabScrollBtnStyle
} from "./ChannelTab.styles";
import { getChannelItemStyle, getChannelTabStyle } from "./UserPage.style";

type ChannelListProps = {
  handleUpdateCurrentChannel: (id: string) => void;
  currentChannel: string;
};

const ChannelList = ({
  handleUpdateCurrentChannel,
  currentChannel
}: ChannelListProps) => {
  const theme = useThemeStore((state) => state.theme);
  const { channels } = useChannelsQuery();

  const channelsPlus = [
    {
      posts: [],
      _id: "all",
      name: "전체",
      description: "all",
      createdAt: "",
      updatedAt: ""
    },
    ...channels
  ];

  const navRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const el = navRef.current;
    if (!el) {
      return;
    }
    const handleScroll = () => {
      setScrollLeft(el.scrollLeft);
      setScrollWidth(el.scrollWidth - el.offsetWidth);
    };
    handleScroll();

    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrevBtnClick = () => {
    navRef.current?.scrollTo({
      left: scrollLeft - 100,
      behavior: "smooth"
    });
    setScrollLeft(scrollLeft - 100);
  };

  const handleNextBtnClick = () => {
    navRef.current?.scrollTo({
      left: scrollLeft + 100,
      behavior: "smooth"
    });
    setScrollLeft(scrollLeft + 100);
  };

  return (
    <Flex
      align="center"
      css={css`
        position: relative;
        width: 100%;
      `}>
      <Flex justify="center" css={getChannelTabStyle(theme)}>
        <div ref={navRef} css={tabNavbarStyle}>
          <Flex
            gap={20}
            css={css`
              width: calc(100% - 30px);
              margin-left: 30px;
            `}>
            {channelsPlus.map((item) => (
              <Flex
                onClick={() => handleUpdateCurrentChannel(item._id)}
                align="center"
                css={getChannelItemStyle(theme, item, currentChannel)}
                key={item._id}>
                {item.name}
              </Flex>
            ))}
            <div
              css={css`
                min-width: 10px;
                height: 1px;
              `}></div>
          </Flex>
        </div>
      </Flex>
      {scrollLeft > 0 && (
        <Flex
          align="center"
          css={css`
            ${tabScrollBtnOuterStyle}
            left: 0;
            box-shadow: inset 40px 0px 10px -10px ${theme.BACKGROUND200};
          `}
          onClick={handlePrevBtnClick}>
          <Icon Svg={Prev} size={30} css={tabScrollBtnStyle} />
        </Flex>
      )}
      {scrollLeft < scrollWidth && (
        <Flex
          align="center"
          css={css`
            ${tabScrollBtnOuterStyle}
            right: -10px;
            box-shadow: inset -40px 0px 10px -10px ${theme.BACKGROUND200};
          `}
          onClick={handleNextBtnClick}>
          <Icon Svg={Next} size={30} css={tabScrollBtnStyle} />
        </Flex>
      )}
    </Flex>
  );
};

export default ChannelList;
