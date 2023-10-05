import React, { useEffect, useState } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Tag from "@components/molecules/Tag";

import { useViewportStore } from "@stores/resize.store";
import { useThemeStore } from "@stores/theme.store";

import { getArticleTag } from "./ArticleWrite.styles";

interface ArticleTagProps {
  stateChange: (value: string[]) => void;
  state?: string[];
  width: string;
}
const ArticleTag = ({ stateChange, state, width }: ArticleTagProps) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(state ? [...state] : []);
  const { theme } = useThemeStore();
  const { currentWidth } = useViewportStore();

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
      <input
        value={inputValue}
        placeholder="태그를 입력하세요(10자 이내)"
        height="30px"
        width={width}
        color={theme.TEXT600}
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
          font-size: 20px;
          background={theme.BACKGROUND100};
          box-sizing: border-box;
          width: 272px;
          height: 35px;
          border-radius:8px;
          padding: 10px;
          outline: none;
        `}
        maxLength={10}
      />
      <div css={getArticleTag(currentWidth)}>
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
      </div>
    </>
  );
};
export default ArticleTag;
