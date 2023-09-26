import { useLocation, useNavigate } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import FloatingButton from "@components/molecules/FloatingButton";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";

import { WIDTH_MAP } from "@constants/media";
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from "@constants/theme";

import { Edit, ExpandLess } from "@assets/svg";

import { getFloatingButtonLocation } from "./FloatingButtons.styles";

const FloatingButtons = ({ scrollPosition }: { scrollPosition: number }) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();
  const { isLoggedIn } = useLoggedIn();
  const { pathname } = useLocation();

  if (pathname.includes("edit")) {
    return null;
  }

  if (pathname === "/create") {
    return null;
  }

  const getMaxWidth = () => {
    if (pathname.includes("article")) {
      return WIDTH_MAP.lg + 80;
    }
    return WIDTH_MAP.xl;
  };

  return (
    <div css={getFloatingButtonLocation(getMaxWidth())}>
      <Flex direction="column">
        {!!scrollPosition && (
          <FloatingButton
            iconValue={{
              Svg: ExpandLess,
              size: 50,
              fill:
                theme.type === "LIGHT"
                  ? DARK_MODE_THEME.TEXT600
                  : LIGHT_MODE_THEME.TEXT600
            }}
            buttonValue={{
              background:
                theme.type === "LIGHT"
                  ? DARK_MODE_THEME.BACKGROUND200
                  : LIGHT_MODE_THEME.BACKGROUND100,
              color: theme.TEXT300,
              children: "",
              onClick: () => window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          />
        )}
        {isLoggedIn && (
          <FloatingButton
            iconValue={{
              Svg: Edit,
              size: 35,
              fill:
                theme.type === "LIGHT"
                  ? DARK_MODE_THEME.TEXT600
                  : LIGHT_MODE_THEME.TEXT600
            }}
            buttonValue={{
              background:
                theme.type === "LIGHT"
                  ? DARK_MODE_THEME.BACKGROUND200
                  : LIGHT_MODE_THEME.BACKGROUND100,
              color: theme.TEXT300,
              children: "",
              onClick: () => {
                navigate("/create");
              }
            }}
          />
        )}
      </Flex>
    </div>
  );
};

export default FloatingButtons;
