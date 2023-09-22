import { useState } from "react";

import { css } from "@emotion/react";

import Conditional from "@components/atoms/Conditional";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Modal from "@components/atoms/Modal";

import { useDebouncedEffect } from "@hooks/useDebouncedEffect";

import { useThemeStore } from "@stores/theme.store";

import { ArrowBack, Search } from "@assets/svg";

import ArticleSearchResults from "./ArticleSearchResults";
import TagSearchResults from "./TagSearchResults";
import UserSearchResults from "./UserSearchResults";

const SEARCH_OPTIONS = {
  TAG: "태그 검색",
  USER: "사용자 검색",
  ARTICLE: "게시글 검색"
} as const;

type SearchOption = keyof typeof SEARCH_OPTIONS | "INITIAL";

type SearchModalProps = {
  visible: boolean;
  onClose: () => void;
};

const SearchModal = ({ visible, onClose }: SearchModalProps) => {
  const theme = useThemeStore((state) => state.theme);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedSearchKeyword, setDebouncedSearchKeyword] = useState("");
  const [searchOption, setSearchOption] = useState<SearchOption>("INITIAL");

  useDebouncedEffect(
    () => {
      setDebouncedSearchKeyword(searchKeyword);
    },
    500,
    [searchKeyword]
  );

  return (
    <Modal visible={visible}>
      <Modal.Background
        css={css`
          background-color: rgba(0, 0, 0, 0.3);
        `}
      />
      <Modal.Container
        onClose={onClose}
        css={css`
          display: flex;
          flex-direction: column;
          width: 520px;
          height: 470px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background-color: ${theme.BACKGROUND100};
        `}>
        <Flex
          align="center"
          gap={10}
          css={css`
            border-bottom: 1px solid var(--border-color);
            padding: 20px;
          `}>
          {searchOption === "INITIAL" ? (
            <Icon size={30} Svg={Search} />
          ) : (
            <Icon
              size={30}
              Svg={ArrowBack}
              css={css`
                cursor: pointer;
              `}
              onClick={() => {
                setSearchOption("INITIAL");
                setSearchKeyword("");
              }}
            />
          )}
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="검색어 입력"
            css={css`
              all: unset;
              width: 100%;
              height: 30px;
              font-size: 16px;
            `}
          />
        </Flex>
        <div
          css={css`
            flex-grow: 1;
            overflow: hidden;
            overflow-y: auto;
          `}>
          <Conditional target={searchOption}>
            <Conditional.Condition name="INITIAL">
              {Object.entries(SEARCH_OPTIONS).map(([key, option]) => (
                <div
                  key={key}
                  css={css`
                    margin: 10px;
                    padding: 10px;
                    border-radius: 8px;
                    cursor: pointer;
                    color: ${theme.TEXT300};
                    :hover {
                      background-color: ${theme.BACKGROUND200};
                    }
                  `}
                  onClick={() =>
                    setSearchOption(key as keyof typeof SEARCH_OPTIONS)
                  }>
                  {option}
                </div>
              ))}
            </Conditional.Condition>
            <Conditional.Condition name="TAG">
              <TagSearchResults
                tag={debouncedSearchKeyword}
                onClick={onClose}
              />
            </Conditional.Condition>
            <Conditional.Condition name="USER">
              <UserSearchResults
                searchKeyword={debouncedSearchKeyword}
                onClick={onClose}
              />
            </Conditional.Condition>
            <Conditional.Condition name="ARTICLE">
              <ArticleSearchResults
                keyword={debouncedSearchKeyword}
                onClick={onClose}
              />
            </Conditional.Condition>
          </Conditional>
        </div>
      </Modal.Container>
    </Modal>
  );
};

export default SearchModal;
