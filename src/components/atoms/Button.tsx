import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { Combine } from "@type/Combine";

export type ButtonProps = Combine<
  {
    width: string;
    height: string;
    fontSize: string;
    color: string;
    background: string;
    borderRadius: string;
    children?: string | React.ReactNode;
  },
  HTMLAttributes<HTMLButtonElement>
>;

const Button = ({
  width = "200px",
  height = "50px",
  fontSize = "14px",
  background = "#007AFF",
  color = "#FFF",
  borderRadius = "8px",
  children
}: ButtonProps) => {
  return (
    <button
      css={css`
        width: ${width};
        height: ${height};
        fontsize: ${fontSize};
        background: ${background};
        color: ${color};
        border-radius: ${borderRadius};
        border: none;
      `}
    >
      {children}
    </button>
  );
};

export default Button;
