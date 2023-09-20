import { useEffect, useRef, useState } from "react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";
import useDetectClose from "@hooks/useDetectClose";

import { useThemeStore } from "@stores/theme.store";

import { ExpandLess, ExpandMore } from "@assets/svg";

import { articleChanneldropdown } from "./ArticleWrite.styles";

type ChannelProps = {
  value: string;
  setChannelIdentify: (value: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const Select = ({
  value,
  setChannelIdentify,
  setIsOpen,
  isOpen
}: ChannelProps) => {
  const ValueClick = () => {
    setChannelIdentify(value);
    setIsOpen(!isOpen);
  };
  return <li onClick={ValueClick}>{value}</li>;
};

interface ArticleChannelSelectProps {
  stateChange: (value: string) => void;
  state?: string;
}
const ArticleChannelSelect = ({
  stateChange,
  state
}: ArticleChannelSelectProps) => {
  const dropdownRef = useRef(null);
  const channelList = [...useChannelsQuery().channels];
  const Mychannel = channelList.filter((x) => x._id === state);
  const [channelIdentify, setChannelIdentify] = useState(
    state ? Mychannel[0].name : "채널 선택"
  );
  const { theme } = useThemeStore();
  const [isOpen, setIsOpen] = useDetectClose(dropdownRef, false);
  const selectedChannel = channelList.find((x) => x.name === channelIdentify);

  useEffect(() => {
    stateChange(selectedChannel ? selectedChannel._id : state ? state : "");
  });

  return (
    <div css={articleChanneldropdown(theme)} ref={dropdownRef}>
      <Flex direction="column">
        <div className="selectInput" onClick={() => setIsOpen(!isOpen)}>
          <Flex align="center">
            <input type="button" value={channelIdentify} />
            {isOpen ? (
              <Icon Svg={ExpandLess} size={15} />
            ) : (
              <Icon Svg={ExpandMore} size={15} />
            )}
          </Flex>
        </div>
        {isOpen && (
          <ul>
            {channelList.map(({ name, _id }) => (
              <Select
                key={_id}
                value={name}
                setIsOpen={setIsOpen}
                setChannelIdentify={setChannelIdentify}
                isOpen={isOpen}
              />
            ))}
          </ul>
        )}
      </Flex>
    </div>
  );
};
export default ArticleChannelSelect;
