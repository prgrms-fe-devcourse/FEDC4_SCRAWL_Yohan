import { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { PATH } from "@constants/index";

type TagSearchResultsProps = {
  tag: string;
  onKeyDown: () => void;
};

const TagSearchResults = ({ tag, onKeyDown }: TagSearchResultsProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && tag) {
        onKeyDown();
        navigate({
          pathname: PATH.SEARCH,
          search: createSearchParams({
            tag: `__${tag}__`
          }).toString()
        });
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [navigate, onKeyDown, tag]);

  return null;
};

export default TagSearchResults;
