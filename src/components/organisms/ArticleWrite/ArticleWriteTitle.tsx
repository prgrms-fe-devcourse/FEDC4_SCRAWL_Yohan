import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Input from "@components/atoms/Input";

import { useThemeStore } from "@stores/theme.store";

interface ArticleTagProps {
  stateChange: (value: string) => void;
  state?: string;
  width: string;
  savedTitle?: string;
}
const ArticleTitle = ({
  stateChange,
  state,
  width,
  savedTitle
}: ArticleTagProps) => {
  const [inputValue, setInputValue] = useState(
    state ? state : savedTitle ? savedTitle : ""
  );
  const { theme } = useThemeStore();
  useEffect(() => {
    stateChange(inputValue);
  });
  return (
    <Input
      value={inputValue}
      placeholder="제목을 입력하세요"
      height="70px"
      width={width}
      fontSize="35px"
      color={theme.TEXT600}
      background={theme.BACKGROUND100}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
      css={css`
        border: none;
      `}
    />
  );
};
export default ArticleTitle;
