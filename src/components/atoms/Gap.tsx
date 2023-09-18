import { css } from "@emotion/react";

const Gap = ({ size = 10 }: { size?: number }) => {
  return (
    <div
      css={css`
        height: ${size}px;
      `}></div>
  );
};

export default Gap;
