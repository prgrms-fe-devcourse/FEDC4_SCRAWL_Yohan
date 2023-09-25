import { css } from "@emotion/react";

import Spinning from "@components/molecules/Spinning";

const FallbackPage = () => {
  return (
    <div
      css={css`
        height: 100vh;
      `}>
      <Spinning width={32} />;
    </div>
  );
};

export default FallbackPage;
