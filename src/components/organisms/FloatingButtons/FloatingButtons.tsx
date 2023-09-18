import { useLocation, useNavigate } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import FloatingButton from "@components/molecules/FloatingButton";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";

import { Add, ExpandLess } from "@assets/svg";

import { floatingButtonLocation } from "./FloatingButtons.styles";

const FloatingButtons = ({ scrollPosition }: { scrollPosition: number }) => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();
  const { isLoggedIn } = useLoggedIn();
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/create" && (
        <div css={floatingButtonLocation}>
          <Flex direction="column">
            {!!scrollPosition && (
              <FloatingButton
                iconValue={{ Svg: ExpandLess, size: 50, fill: theme.TEXT600 }}
                buttonValue={{
                  color: theme.TEXT300,
                  children: "",
                  onClick: () => {
                    console.log("up");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              />
            )}
            {isLoggedIn && (
              <FloatingButton
                iconValue={{ Svg: Add, size: 50, fill: theme.TEXT600 }}
                buttonValue={{
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
      )}
    </>
  );
};

export default FloatingButtons;
