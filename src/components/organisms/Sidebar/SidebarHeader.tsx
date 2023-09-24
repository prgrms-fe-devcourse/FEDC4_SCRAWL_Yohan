import Flex from "@components/atoms/Flex";
import IconText from "@components/molecules/IconText";

import { Theme } from "@constants/theme";

import { Logo } from "@assets/svg";

import { sidebarAppearButtonRtl } from "./Sidebar.styles";
import { getSidebarLogo, sidebarLogo } from "./Sidebar.styles";
import SidebarAppearButton from "./SidebarAppearButton";

type SidebarHeaderProps = {
  theme: Theme;
  outerWidth: number;
  navigatePage: (page: string, channelID?: string) => void;
  handleSidebarAppear: () => void;
};
const SidebarHeader = ({
  theme,
  navigatePage,
  handleSidebarAppear
}: SidebarHeaderProps) => {
  return (
    <div css={getSidebarLogo(theme)}>
      <Flex>
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
        <SidebarAppearButton
          Rtl={true}
          handleSidebarAppear={handleSidebarAppear}
          css={sidebarAppearButtonRtl}
        />
      </Flex>
    </div>
  );
};
export default SidebarHeader;
