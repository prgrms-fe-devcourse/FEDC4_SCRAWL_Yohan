import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import { Combine } from "@type/Combine";

import { SVGType } from "@assets/svg";

export type IconProps = Combine<
  {
    Svg: SVGType;
    size?: number;
    fill?: string;
  },
  HTMLAttributes<SVGSVGElement>
>;
const Icon = ({ Svg, size = 20, fill = "#8B8B8B", ...props }: IconProps) => {
  return (
    <>
      <Svg
        css={css`
          width: ${size}px;
          min-width: ${size}px;
          height: ${size}px;
          fill: ${fill};
        `}
        {...props}
      />
    </>
  );
};

export default Icon;
