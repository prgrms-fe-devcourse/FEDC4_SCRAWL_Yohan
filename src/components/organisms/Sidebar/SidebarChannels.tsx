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
        {channelList.map(({ name, _id }) => {
          return (
            <IconText
              key={_id}
              iconValue={{
                Svg: name === "질문/답변" ? Question : Folder,
                size: channelIconSize,
                fill: channelColor
              }}
              textValue={{
                children: name,
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
