import FloatingButton from "@components/molecules/FloatingButton";

import { useThemeStore } from "@stores/theme.store";

import { KeyboardTab, KeyboardTabRtl } from "@assets/svg";

import { sidebarAppearButton, sidebarAppearButtonRtl } from "./Sidebar.styles";

const SidebarAppearButton = ({ appearButton = true, Rtl = true }) => {
  const { theme } = useThemeStore();
  return (
    <>
      {appearButton && (
        <FloatingButton
          iconValue={{
            Svg: Rtl ? KeyboardTabRtl : KeyboardTab,
            size: 25,
            fill: theme.TEXT600
          }}
          buttonValue={{
            background: "transparent",
            children: "",
            shadow: false,
            onClick: () => {
              // console.log("up");
              // window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          css={
            Rtl ? sidebarAppearButtonRtl : sidebarAppearButton
          }></FloatingButton>
      )}
    </>
  );
};

export default SidebarAppearButton;
