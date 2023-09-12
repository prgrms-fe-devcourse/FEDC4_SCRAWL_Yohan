import { useState } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import IconText from "@components/molecules/IconText";

import { useThemeStore } from "@stores/theme.store";

import { Moon, Sun } from "@assets/svg";

type themeToggleProps = {
  width: string;
  height: string;
};
const ThemeToggle = ({ width, height }: themeToggleProps) => {
  const { theme, toggleTheme } = useThemeStore();
  const [checked, setIsChecked] = useState(theme.type === "DARK");

  const background = theme.BACKGROUND300;
  const handleChange = () => {
    setIsChecked(!checked);
    toggleTheme();
  };
  const ToggleContainer = css`
    display: inline-block;
    position: relative;
    cursor: pointer;
    user-select: none;
    .ToggleButton {
      &:after {
        content: "";
        position: relative;
        left: 0;
        display: block;
        width: 90px;
        height: 30px;
        border-radius: 6px;
        background-color: ${theme.BACKGROUND200};
        transition: left 0.2s ease-out;
      }
    }
  `;
  const ToggleInput = css`
    display: none;
    &:checked + .ToggleButton {
      background: ${theme.BACKGROUND100};
    }
    &:checked + .ToggleButton:after {
      left: calc(100% - 90px);
    }
  `;

  return (
    <>
      <div css={ToggleContainer} onClick={handleChange}>
        <input
          type="checkbox"
          css={ToggleInput}
          value=""
          onChange={handleChange}
          checked={checked}
        />
        <Button
          width={width}
          height={height}
          borderRadius="8px"
          background={background}
          children=""
          css={css`
            box-sizing: border-box;
            padding: 2px;
          `}
          className="ToggleButton"
        />
        <Flex
          css={css`
            position: absolute;
            bottom: -12px;
            z-index: 1;
          `}>
          <IconText
            iconValue={{ Svg: Sun, size: 12, fill: theme.TEXT100 }}
            textValue={{
              children: "Light",
              size: 12,
              color: theme.TEXT300
            }}
            css={css`
              margin: 25px;
              gap: 10px;
            `}
          />
          <IconText
            iconValue={{ Svg: Moon, size: 12, fill: theme.TEXT100 }}
            textValue={{
              children: "Dark",
              size: 12,
              color: theme.TEXT300
            }}
            css={css`
              margin: 25px;
              gap: 10px;
            `}
          />
        </Flex>
      </div>
    </>
  );
};
export default ThemeToggle;
