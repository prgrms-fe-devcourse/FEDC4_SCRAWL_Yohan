import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Input from "@components/atoms/Input";

import { useThemeStore } from "@stores/theme.store";

interface ArticleTagProps {
  stateChange: (value: string) => void;
  width: string;
}
const ArticleTag = ({ stateChange, width }: ArticleTagProps) => {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useThemeStore();
  useEffect(() => {
    stateChange(inputValue);
  });
  return (
    <Input
      value={inputValue}
      placeholder="태그를 입력하세요"
      height="30px"
      width={width}
      fontSize="20px"
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
export default ArticleTag;
