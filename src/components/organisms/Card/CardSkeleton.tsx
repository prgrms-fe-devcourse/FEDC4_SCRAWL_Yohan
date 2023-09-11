import { useThemeStore } from "@stores/theme.store";

import { MIN_CARD_WIDTH } from "@constants/card";

import { getCardSkeletionOuterStyle } from "./Card.styles";

const CardSkeleton = ({ width: w }: { width: number }) => {
  const { theme } = useThemeStore();

  const width = Math.max(w, MIN_CARD_WIDTH);

  return <div css={getCardSkeletionOuterStyle(theme, width)}></div>;
};

export default CardSkeleton;
