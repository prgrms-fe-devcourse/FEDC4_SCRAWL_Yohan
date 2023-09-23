import { FunctionComponent } from "react";

import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { Theme } from "@constants/theme";

import {
  AI,
  Back,
  BigData,
  Data,
  DevOps,
  Embedded,
  Folder,
  Free,
  Front,
  Game,
  Job,
  Question,
  Security
} from "@assets/svg";

import {
  getSelectedSidebarIconText,
  getSidebarIconText,
  getSidebarText,
  sidebarChannelLogin,
  sidebarChannelLogout
} from "./Sidebar.styles";

const channels = [
  "질문/답변",
  "자유",
  "취업/이직",
  "프론트엔드",
  "백엔드",
  "게임",
  "데이터",
  "AI",
  "빅데이터",
  "DevOps",
  "임베디드",
  "보안"
];

type SidebarChannelsProps = {
  theme: Theme;
  navigatePage: (page: string, channelID?: string) => void;
  channelIconSize: number;
  channelTextSize: number;
  isLoggedIn: boolean;
  myLocation: string;
};
const SidebarChannels = ({
  theme,
  navigatePage,
  channelIconSize,
  channelTextSize,
  isLoggedIn,
  myLocation
}: SidebarChannelsProps) => {
  const channelColor = theme.TEXT300;
  const channelList = [...useChannelsQuery().channels];
  const IconMatch = (channel: string) => {
    switch (channel) {
      case "question":
        return Question;
      case "free":
        return Free;
      case "job search":
        return Job;
      case "frontend":
        return Front;
      case "backend":
        return Back;
      case "game":
        return Game;
      case "data":
        return Data;
      case "AI":
        return AI;
      case "big data":
        return BigData;
      case "DevOps":
        return DevOps;
      case "embedded":
        return Embedded;
      case "security":
        return Security;
      default:
        return Folder;
    }
  };
  return (
    <>
      <Text size={12} css={getSidebarText}>
        CHANNELS
      </Text>
      <div css={isLoggedIn ? sidebarChannelLogin : sidebarChannelLogout}>
        {channelList.map(({ name, _id }, i) => {
          return (
            <IconText
              key={_id}
              iconValue={{
                Svg: IconMatch(name) as FunctionComponent<
                  React.SVGProps<SVGSVGElement>
                >,
                size: channelIconSize,
                fill: channelColor
              }}
              textValue={{
                children: channels[i],
                size: channelTextSize,
                color: channelColor
              }}
              css={
                myLocation.includes(_id)
                  ? getSelectedSidebarIconText(theme)
                  : getSidebarIconText(theme)
              }
              onClick={() => navigatePage("CHANNEL", _id)}
            />
          );
        })}
      </div>
    </>
  );
};
export default SidebarChannels;
