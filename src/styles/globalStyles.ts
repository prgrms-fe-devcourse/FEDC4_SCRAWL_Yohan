import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getGlobalStyles = (theme: Theme) => {
  return css`
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@200;300;400;700&display=swap");
    html {
      font-family: "IBM Plex Sans KR", sans-serif;
      color: ${theme.TEXT600};
      --border-color: ${theme.BORDER100};
      background-color: ${theme.BACKGROUND100};
      box-sizing: border-box;
    }
    body {
      * {
        overscroll-behavior: none;
      }
      margin: 0;
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.type === "LIGHT" ? "lightgray" : "gray"};
      }
    }

    ::-webkit-scrollbar {
      height: 0.5em;
      width: 0.5em;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.25em;
    }
    :hover::-webkit-scrollbar-thumb {
      background-color: ${theme.type === "LIGHT" ? "lightgray" : "gray"};
    }
    .wmde-markdown {
      * {
        overscroll-behavior: initial;
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;
};
