import { CSSProperties, HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { Combine } from "@type/Combine";

export type BoxProps = Combine<
  {
    children: React.ReactNode;
    direction?: CSSProperties["flexDirection"];
    align?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
    gap?: number;
  },
  HTMLAttributes<HTMLDivElement>
>;

const Flex = ({
  children,
  direction = "row",
  align = "start",
  justify = "start",
  gap = 0,
  ...props
}: BoxProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
        gap: ${gap}px;
      `}
      {...props}>
      {children}
    </div>
  );
};

export default Flex;
