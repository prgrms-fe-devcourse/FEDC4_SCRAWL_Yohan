import React, { useEffect, useState } from "react";

import Input from "@components/atoms/Input";

interface ArticleTagProps {
  stateChange: (value: string) => void;
  width: string;
}
const ArticleTitle = ({ stateChange, width }: ArticleTagProps) => {
  const [inputValue, setInputValue] = useState("");

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
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setInputValue(e.target.value)
      }
    />
  );
};
export default ArticleTitle;
