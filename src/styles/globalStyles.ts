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
      margin: 0;
    }
  `;
};
