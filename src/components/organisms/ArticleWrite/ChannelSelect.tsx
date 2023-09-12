import { useRef, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";

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

const ChannelSelect = () => {
  const dropdownRef = useRef(null);
  const [channelIdentify, setChannelIdentify] = useState("채널 선택");
  const channelList = ["프론트엔드", "백엔드", "AI"];
  const { theme } = useThemeStore();

  const [isOpen, setIsOpen] = useDetectClose(dropdownRef, false);

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
      color: ${theme.TEXT600};
      background-color: ${theme.BACKGROUND100};
      border-radius: 5px;
      list-style: none;
      z-index: 1;
      :hover {
        cursor: pointer;
      }
    }
    li {
      margin: 2.5px 5px 2.5px 5px;
      padding: 5px;
      border-radius: 5px;
      min-width: 100px;
      :hover {
        background-color: ${theme.BACKGROUND300};
      }
    }
  `;

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
              {channelList.map((value, index) => (
                <Select
                  key={index}
                  value={value}
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
