import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { Combine } from "@type/Combine";

export type TextProps = Combine<
  {
    children: React.ReactNode;
    block?: boolean;
    paragraph?: boolean;
    size: number;
    strong?: boolean;
    underline?: boolean;
    delete?: boolean;
    color?: string;
  },
  HTMLAttributes<HTMLElement>
>;

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  underline,
  delete: del,
  color,
  ...props
}: TextProps) => {
  const Tag = block ? "div" : paragraph ? "p" : "span";
  if (del) {
    children = <del>{children}</del>;
  }

  return (
    <Tag
      css={css`
        font-weight: ${strong ? "bold" : undefined};
        font-size: ${size}px;
        text-decoration: ${underline ? "underline" : undefined};
        color: ${color};
      `}
      {...props}>
      {children}
    </Tag>
  );
};

export default Text;
