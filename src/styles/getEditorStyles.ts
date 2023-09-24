import { css } from "@emotion/react";

import { Theme } from "@constants/theme";

export const getEditorStyle = (theme: Theme) => css`
  .w-md-editor-content {
    border: none;
  }
  width: 100%;
  max-width: 1080px;
  background-color: transparent;
  color: inherit;
  .code-highlight {
    border-radius: 0;
    color: ${theme.TEXT600};
    background-color: ${theme.BACKGROUND200};
  }
  .wmde-markdown {
    background-color: transparent;
    color: inherit;
  }
  .copied {
    background-color: ${theme.BACKGROUND200} !important;
  }
`;
