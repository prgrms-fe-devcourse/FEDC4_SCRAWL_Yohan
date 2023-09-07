import { CSSProperties, HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { Combine } from "@type/Combine";

export type BoxProps = Combine<
  {
    children: React.ReactNode;
    direction?: CSSProperties["flexDirection"];
    align?: CSSProperties["alignItems"];
    justify?: CSSProperties["justifyContent"];
  },
  HTMLAttributes<HTMLDivElement>
>;

const Flex = ({
  children,
  direction = "row",
  align = "start",
  justify = "start",
  ...props
}: BoxProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: ${direction};
        align-items: ${align};
        justify-content: ${justify};
      `}
      {...props}>
      {children}
    </div>
  );
};

export default Flex;
