import React, { useEffect, useState } from "react";

import Input from "@components/atoms/Input";

interface ArticleTagProps {
  stateChange: (value: string) => void;
}
const ArticleTitle = ({ stateChange }: ArticleTagProps) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    stateChange(inputValue);
  });
  return (
    <Input
      value={inputValue}
      placeholder="제목을 입력하세요"
      height="70px"
      width="750px"
      fontSize="35px"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
    />
  );
};
export default ArticleTitle;
