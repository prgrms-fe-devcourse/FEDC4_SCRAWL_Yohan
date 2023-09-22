import Text from "@components/atoms/Text";
import IconText from "@components/molecules/IconText";

import { useChannelsQuery } from "@hooks/api/useChannelsQuery";

import { Theme } from "@constants/theme";

import { Folder, Question } from "@assets/svg";

import {
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
};
const SidebarChannels = ({
  theme,
  navigatePage,
  channelIconSize,
  channelTextSize,
  isLoggedIn
}: SidebarChannelsProps) => {
  const channelColor = theme.TEXT300;
  const channelList = [...useChannelsQuery().channels];

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
                Svg: name === "question" ? Question : Folder,
                size: channelIconSize,
                fill: channelColor
              }}
              textValue={{
                children: channels[i],
                size: channelTextSize,
                color: channelColor
              }}
              css={getSidebarIconText(theme)}
              onClick={() => navigatePage("CHANNEL", _id)}
            />
          );
        })}
      </div>
    </>
  );
};
export default SidebarChannels;
