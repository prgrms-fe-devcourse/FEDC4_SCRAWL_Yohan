import { css } from "@emotion/react";

import { WIDTH_MAP } from "@constants/media";
import { Theme } from "@constants/theme";
import { MAX_WIDTH } from "@constants/width";

export const articleWriteButton = css`
  margin-top: 10px;
  width: 100%;
  max-width: ${MAX_WIDTH.md}px;
  :hover {
    cursor: pointer;
  }
`;
export const articleChanneldropdown = (theme: Theme) => css`
  position: relative;
  input {
    font-size: 20px;
    color: ${theme.PRIMARY};
    font-weight: 400;
    min-width: 100px;
    border: 2px;
    background-color: transparent;
    :hover {
      cursor: pointer;
    }
  }
  .selectInput {
    background-color: ${theme.BACKGROUND200};
    padding: 5px;
    border-radius: 5px;
  }
  ul {
    position: absolute;
    top: 100%;
    margin-top: 5px;
    padding: 0;
    color: ${theme.TEXT600};
    background-color: ${theme.BACKGROUND100};
    border-radius: 5px;
    border: 1px solid var(--border-color);
    list-style: none;
    z-index: 1;
    :hover {
      cursor: pointer;
    }
  }
  li {
    margin: 2.5px 5px;
    padding: 5px;
    border-radius: 5px;
    min-width: 100px;
    text-align: center;
    :hover {
      background-color: ${theme.BACKGROUND300};
    }
  }
`;
export const getArticleTag = (currentWidth: number) => css`
  height: 44px;
  max-width: ${currentWidth > 1430
    ? MAX_WIDTH.md + "px"
    : currentWidth > WIDTH_MAP.md
    ? currentWidth - 340 + "px"
    : "100%"};
  overflow-x: scroll;
  overflow-y: hidden;
`;
