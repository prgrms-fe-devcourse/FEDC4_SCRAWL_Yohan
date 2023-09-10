import { css } from "@emotion/react";

export type TextProps = {
  children: React.ReactNode;
  block?: boolean;
  paragraph?: boolean;
  size: number;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: string;
};

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
