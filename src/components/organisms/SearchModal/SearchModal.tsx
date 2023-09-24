import { Suspense, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { css } from "@emotion/react";

import Conditional from "@components/atoms/Conditional";
import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Modal from "@components/atoms/Modal";

import { useDebouncedEffect } from "@hooks/useDebouncedEffect";

import { useThemeStore } from "@stores/theme.store";

import { ArrowBack, Search } from "@assets/svg";

import ArticleSearchResults from "./ArticleSearchResults";
import {
  getSearchModalContainerStyle,
  getSearchOptionBtnStyle,
  getTooltipStyle,
  searchModalHeaderStyle
} from "./SearchModal.styles";
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

  useEffect(() => {
    if (debouncedSearchKeyword && searchOption === "INITIAL") {
      toast("먼저 검색 옵션을 선택해주세요!");
    }
  }, [debouncedSearchKeyword, searchOption]);

  return (
    <Modal visible={visible}>
      <Modal.Background
        css={css`
          background-color: rgba(0, 0, 0, 0.3);
        `}
      />
      <Modal.Container
        onClose={onClose}
        css={getSearchModalContainerStyle(theme)}>
        <Flex align="center" gap={10} css={searchModalHeaderStyle}>
          {searchOption === "INITIAL" ? (
            <Icon size={30} Svg={Search} />
          ) : (
            <>
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
              <div css={getTooltipStyle(theme)}>
                {SEARCH_OPTIONS[searchOption]}
              </div>
            </>
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
                  css={getSearchOptionBtnStyle(theme)}
                  onClick={() =>
                    setSearchOption(key as keyof typeof SEARCH_OPTIONS)
                  }>
                  {option}
                </div>
              ))}
            </Conditional.Condition>
            <Conditional.Condition name="TAG">
              <Suspense fallback={null}>
                <TagSearchResults
                  tag={debouncedSearchKeyword}
                  onClick={onClose}
                />
              </Suspense>
            </Conditional.Condition>
            <Conditional.Condition name="USER">
              <Suspense fallback={null}>
                <UserSearchResults
                  searchKeyword={debouncedSearchKeyword}
                  onClick={onClose}
                />
              </Suspense>
            </Conditional.Condition>
            <Conditional.Condition name="ARTICLE">
              <Suspense fallback={null}>
                <ArticleSearchResults
                  keyword={debouncedSearchKeyword}
                  onClick={onClose}
                />
              </Suspense>
            </Conditional.Condition>
          </Conditional>
        </div>
      </Modal.Container>
    </Modal>
  );
};

export default SearchModal;
