import { css } from "@emotion/react";

import { SVGLogo } from "../../assets/svg";

type IconProps = {
  size?: number;
  fill?: string;
};
const Icon = ({ size = 20, fill = "#8B8B8B", ...props }: IconProps) => {
  return (
    <>
      <SVGLogo
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
