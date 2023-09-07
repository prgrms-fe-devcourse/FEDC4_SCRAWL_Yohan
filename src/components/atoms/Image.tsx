import { CSSProperties, HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { Combine } from "@type/Combine";

type ImageProps = Combine<
  {
    src: string;
    block?: boolean;
    width: number;
    height: number;
    alt: string;
    mode: CSSProperties["objectFit"];
  },
  HTMLAttributes<HTMLImageElement>
>;

const Image = ({
  src,
  block = true,
  width,
  height,
  alt,
  mode,
  ...props
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      css={css`
        display: ${block ? "block" : "inline"};
        width: ${width}px;
        height: ${height}px;
        object-fit: ${mode};
      `}
      {...props}
    />
  );
};

export default Image;
