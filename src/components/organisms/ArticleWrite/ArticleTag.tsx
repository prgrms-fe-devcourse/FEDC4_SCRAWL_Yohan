import React, { useEffect, useState } from "react";

import Input from "@components/atoms/Input";

interface ArticleTagProps {
  stateChange: (value: string) => void;
  width: string;
}
const ArticleTag = ({ stateChange, width }: ArticleTagProps) => {
  const [inputValue, setInputValue] = useState("");

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
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
    />
  );
};
export default ArticleTag;