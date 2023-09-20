import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Input from "@components/atoms/Input";
import Tag from "@components/molecules/Tag";

import { useThemeStore } from "@stores/theme.store";

interface ArticleTagProps {
  stateChange: (value: string[]) => void;
  state?: string[];
  width: string;
}
const ArticleTag = ({ stateChange, state, width }: ArticleTagProps) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(state ? [...state] : []);
  const { theme } = useThemeStore();

  const addToSet = (value: string) => {
    const updatedSet = new Set(tags);
    updatedSet.add(value);
    setTags([...updatedSet]);
  };

  const removeFromSet = (value: string) => {
    const updatedSet = new Set(tags);
    updatedSet.delete(value);
    setTags([...updatedSet]);
  };

  useEffect(() => {
    stateChange(tags);
  });
  return (
    <>
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
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.nativeEvent.isComposing || !inputValue) return;
          if (e.key === "Enter") {
            addToSet(`__${inputValue}__`);
            setInputValue("");
          }
        }}
        css={css`
          border: none;
        `}
      />
      <Flex
        gap={10}
        css={css`
          padding: 10px;
        `}>
        {tags.map((tag, index) => {
          return (
            <Tag
              key={index}
              size={16}
              name={tag}
              onClick={() => {
                removeFromSet(tag);
              }}
            />
          );
        })}
      </Flex>
    </>
  );
};
export default ArticleTag;
