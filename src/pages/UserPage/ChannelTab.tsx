import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { useThemeStore } from "@stores/theme.store";

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

  return (
    <Flex justify="center" css={getChannelTabStyle(theme)}>
      <div
        ref={navRef}
        css={css`
          position: relative;
          overflow-x: scroll;
          ::-webkit-scrollbar {
            display: none;
          }
          box-shadow: ${scrollLeft > 0
              ? `inset 30px 0px 10px -10px ${theme.BACKGROUND200}`
              : `inset 0px 0px 0px 0px ${theme.BACKGROUND200}`}${scrollLeft <
            scrollWidth
              ? `, inset -30px 0px 10px -10px ${theme.BACKGROUND200}`
              : `, inset 0px 0px 0px 0px ${theme.BACKGROUND200}`};
        `}>
        {/* TODO: 스타일 분리 */}
        <Flex
          gap={20}
          css={css`
            width: 100%;
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
        </Flex>
      </div>
    </Flex>
  );
};

export default ChannelList;
