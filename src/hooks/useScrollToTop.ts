import { useEffect } from "react";

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
};
