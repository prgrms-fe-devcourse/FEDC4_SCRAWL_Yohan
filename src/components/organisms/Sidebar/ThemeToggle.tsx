import { useState } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";

import { useThemeStore } from "@stores/theme.store";

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
        background-color: ${theme.BACKGROUND100};
        transition: left 0.2s ease-out;
      }
    }
  `;
  const ToggleInput = css`
    display: none;
    &:checked + .ToggleButton {
      background: ${theme.TEXT300};
    }
    &:checked + .ToggleButton:after {
      left: calc(100% - 90px);
    }
  `;

  return (
    <>
      <label css={ToggleContainer} onClick={handleChange}>
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
          padding="2px"
        `}
          className="ToggleButton"
        />
      </label>
    </>
  );
};
export default ThemeToggle;
