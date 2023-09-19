import IconText from "@components/molecules/IconText";

import { Theme } from "@constants/theme";

import { Logo } from "@assets/svg";

import { getSidebarLogo, sidebarLogo } from "./Sidebar.styles";

type SidebarHeaderProps = {
  theme: Theme;
  navigatePage: (page: string, channelID?: string) => void;
};
const SidebarHeader = ({ theme, navigatePage }: SidebarHeaderProps) => {
  return (
    <div css={getSidebarLogo(theme)}>
      <div css={sidebarLogo}>
        <IconText
          iconValue={{ Svg: Logo, size: 50, fill: theme.TEXT600 }}
          textValue={{
            children: "괴발개발",
            size: 30,
            color: theme.TEXT600
          }}
          onClick={() => navigatePage("HOME")}
        />
      </div>
    </div>
  );
};
export default SidebarHeader;
