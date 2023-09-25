import { HTMLAttributes, useContext } from "react";

import FloatingButton from "@components/molecules/FloatingButton";

import { useThemeStore } from "@stores/theme.store";

import { SidebarContext } from "@contexts/sidebar.context";

import { Combine } from "@type/Combine";

import { KeyboardTab, KeyboardTabRtl } from "@assets/svg";

import { sidebarAppearButton, sidebarAppearButtonRtl } from "./Sidebar.styles";

type SidebarAppearButton = Combine<
  {
    Rtl: boolean;
  },
  HTMLAttributes<HTMLElement>
>;

const SidebarAppearButton = ({ Rtl = true, ...props }: SidebarAppearButton) => {
  const { theme } = useThemeStore();
  const sidebarCtx = useContext(SidebarContext);
  if (!sidebarCtx) throw new Error("sidebarProvider is not founded");
  const { sidebarAppear, setSidebarAppear } = sidebarCtx;

  return (
    <>
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
          width: "35px",
          height: "35px",
          onClick: () => setSidebarAppear(!sidebarAppear)
        }}
        css={Rtl ? sidebarAppearButtonRtl : sidebarAppearButton}
        {...props}></FloatingButton>
    </>
  );
};

export default SidebarAppearButton;
