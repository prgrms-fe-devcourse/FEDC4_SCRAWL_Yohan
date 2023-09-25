import { toast } from "react-hot-toast";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";

import { LogoAlert, LogoSuccess } from "@assets/svg";

export const scrawlToast = {
  success: (message: string) => {
    toast(() => (
      <Flex align="center" justify="center" gap={10}>
        <Icon Svg={LogoSuccess} size={32} fill="rgb(27, 219, 2)" />
        <span
          css={css`
            white-space: nowrap;
          `}>
          {message}
        </span>
      </Flex>
    ));
  },
  error: (message: string) => {
    toast(() => (
      <Flex align="center" justify="center" gap={10}>
        <Icon Svg={LogoAlert} size={32} fill="rgb(255, 60, 60)" />
        <span
          css={css`
            white-space: nowrap;
          `}>
          {message}
        </span>
      </Flex>
    ));
  }
} as const;
