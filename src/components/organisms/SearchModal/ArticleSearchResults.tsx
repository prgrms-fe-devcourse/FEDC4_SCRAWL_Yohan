import { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { PATH } from "@constants/index";

type ArticleSearchResultsProps = {
  title: string;
  onKeyDown: () => void;
};

const ArticleSearchResults = ({
  title,
  onKeyDown
}: ArticleSearchResultsProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && title) {
        onKeyDown();
        navigate({
          pathname: PATH.SEARCH,
          search: createSearchParams({
            article: title
          }).toString()
        });
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [navigate, onKeyDown, title]);

  return null;
};

export default ArticleSearchResults;
