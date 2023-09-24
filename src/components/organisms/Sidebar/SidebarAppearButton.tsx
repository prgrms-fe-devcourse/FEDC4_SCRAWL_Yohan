import { HTMLAttributes } from "react";

import FloatingButton from "@components/molecules/FloatingButton";

import { useThemeStore } from "@stores/theme.store";

import { Combine } from "@type/Combine";

import { KeyboardTab, KeyboardTabRtl } from "@assets/svg";

type SidebarAppearButton = Combine<
  {
    Rtl: boolean;
    handleSidebarAppear: () => void;
  },
  HTMLAttributes<HTMLElement>
>;

const SidebarAppearButton = ({
  Rtl = true,
  handleSidebarAppear,
  ...props
}: SidebarAppearButton) => {
  const { theme } = useThemeStore();
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
          onClick: handleSidebarAppear
        }}
        {...props}></FloatingButton>
    </>
  );
};

export default SidebarAppearButton;
