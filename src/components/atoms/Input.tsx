import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { Combine } from "@type/Combine";

export type InputProps = Combine<
  {
    width?: string;
    height?: string;
    fontSize?: string;
    background?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    type?: "text" | "password" | "email";
    value: string;
    name?: string;
    placeholder?: string;
  },
  HTMLAttributes<HTMLInputElement>
>;

const Input = ({
  width = "272px",
  height = "35px",
  fontSize = "14px",
  color = "#111",
  border = "1px solid #EEE",
  background = "#F9F9F9",
  borderRadius = "8px",
  type = "text",
  value,
  name,
  placeholder,
  onChange,
  ...props
}: InputProps) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      css={css`
        box-sizing: border-box;
        width: ${width};
        height: ${height};
        font-size: ${fontSize};
        background: ${background};
        color: ${color};
        border: ${border};
        border-radius: ${borderRadius};
        padding: 10px;
        outline: none;
      `}
      {...props}
    />
  );
};

export default Input;
