import { css } from "@emotion/react";

import FloatingButton from "@components/molecules/FloatingButton";

import { useThemeStore } from "@stores/theme.store";

import { KeyboardTab, KeyboardTabRtl } from "@assets/svg";

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
          css={css`
            margin-left: 15px;
            margin-top: 30px;
          `}></FloatingButton>
      )}
    </>
  );
};

export default SidebarAppearButton;
