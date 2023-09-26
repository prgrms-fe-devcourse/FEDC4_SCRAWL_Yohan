import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import IconText from "@components/molecules/IconText";

import { useSidebarContext } from "@hooks/contexts/useSidebarContext";

import { Theme } from "@constants/theme";

import { Logo } from "@assets/svg";

import { getSidebarLogo, sidebarLogo } from "./Sidebar.styles";
import SidebarAppearButton from "./SidebarAppearButton";

type SidebarHeaderProps = {
  theme: Theme;
  outerWidth: number;
  navigatePage: (page: string, channelID?: string) => void;
};
const SidebarHeader = ({ theme, navigatePage }: SidebarHeaderProps) => {
  const { sidebarAppear } = useSidebarContext();
  return (
    <div css={getSidebarLogo(theme)}>
      <Flex align="center">
        <div css={sidebarLogo}>
          <IconText
            iconValue={{ Svg: Logo, size: 35, fill: theme.TEXT600 }}
            textValue={{
              children: "괴발개발",
              size: 25,
              color: theme.TEXT600
            }}
            css={css`
              gap: 10px;
            `}
            onClick={() => navigatePage("HOME")}
          />
        </div>
        {sidebarAppear && <SidebarAppearButton Rtl={true} />}
      </Flex>
    </div>
  );
};
export default SidebarHeader;
