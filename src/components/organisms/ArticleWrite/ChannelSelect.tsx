import { useEffect, useRef, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";
import useDetectClose from "@hooks/useDetectClose";

import { useThemeStore } from "@stores/theme.store";

import { BracketLower, BracketUpper } from "@assets/svg";

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

interface ArticleChannelProps {
  stateChange: (value: string) => void;
}
const ChannelSelect = ({ stateChange }: ArticleChannelProps) => {
  const dropdownRef = useRef(null);
  const [channelIdentify, setChannelIdentify] = useState("채널 선택");
  const { theme } = useThemeStore();
  const channelList = [...useChannelsQuery().channels];
  const [isOpen, setIsOpen] = useDetectClose(dropdownRef, false);
  console.log("channel:", channelList);
  const selectedChannel = channelList.find((x) => x.name === channelIdentify);

  const CSSdropdown = css`
    position: relative;
    input {
      font-size: 20px;
      color: ${theme.PRIMARY};
      font-weight: 400;
      min-width: 100px;
      border: 2px;
      background-color: transparent;
      :hover {
        cursor: pointer;
      }
    }
    .selectInput {
      background-color: ${theme.BACKGROUND200};
      padding: 5px;
      border-radius: 5px;
    }
    ul {
      position: absolute;
      top: 100%;
      margin-top: 5px;
      padding: 0;
      color: ${theme.TEXT600};
      background-color: ${theme.BACKGROUND100};
      border-radius: 5px;
      border: 1px solid var(--border-color);
      list-style: none;
      z-index: 1;
      :hover {
        cursor: pointer;
      }
    }
    li {
      margin: 2.5px 5px;
      padding: 5px;
      border-radius: 5px;
      min-width: 100px;
      text-align: center;
      :hover {
        background-color: ${theme.BACKGROUND300};
      }
    }
  `;

  useEffect(() => {
    stateChange(selectedChannel ? selectedChannel._id : "");
  });

  return (
    <>
      <div css={CSSdropdown} ref={dropdownRef}>
        <Flex direction="column">
          <div className="selectInput" onClick={() => setIsOpen(!isOpen)}>
            <Flex align="center">
              <input type="button" value={channelIdentify} />
              {isOpen ? (
                <Icon Svg={BracketUpper} size={15} />
              ) : (
                <Icon Svg={BracketLower} size={15} />
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
    </>
  );
};
export default ChannelSelect;
