import { css } from "@emotion/react";

import { SVGType } from "../../assets/svg";

type IconProps = {
  Svg: SVGType;
  size?: number;
  fill?: string;
};
const Icon = ({ Svg, size = 20, fill = "#8B8B8B", ...props }: IconProps) => {
  return (
    <>
      <Svg
        css={css`
          width: ${size}px;
          height: ${size}px;
          fill: ${fill};
        `}
        {...props}
      />
    </>
  );
};

export default Icon;
