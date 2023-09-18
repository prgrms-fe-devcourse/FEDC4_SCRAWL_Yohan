import { useLocation, useNavigate } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import FloatingButton from "@components/molecules/FloatingButton";

import { useLoggedIn } from "@hooks/useLoggedIn";

import { useThemeStore } from "@stores/theme.store";

import { Add, ExpandLess } from "@assets/svg";

import {
  floatingButtonLocation,
  floatingButtonOuterStyleHide
} from "./FloatingButtons.styles";

const FloatingButtons = () => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();
  return (
    <div
      css={
        useLocation().pathname !== "/create"
          ? floatingButtonLocation
          : floatingButtonOuterStyleHide
      }>
      <Flex direction="column">
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
        <FloatingButton
          iconValue={{ Svg: Add, size: 50, fill: theme.TEXT600 }}
          buttonValue={{
            color: theme.TEXT300,
            children: "",
            onClick: () => {
              navigate("/create");
            }
          }}
          css={!useLoggedIn().isLoggedIn && floatingButtonOuterStyleHide}
        />
      </Flex>
    </div>
  );
};

export default FloatingButtons;
