import { createSearchParams, useNavigate } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import Tag from "@components/molecules/Tag";

import { PATH } from "@constants/index";

import { tagStyle, tagsContainerStyle } from "./Tags.styles";

const Tags = ({ tags }: { tags: string[] }) => {
  const navigate = useNavigate();

  return (
    <Flex gap={5} css={tagsContainerStyle}>
      {tags.map((tag, i) => (
        <Tag
          key={`${tag}${i}`}
          size={12}
          name={tag}
          css={tagStyle}
          onClick={() =>
            navigate({
              pathname: PATH.SEARCH,
              search: createSearchParams({
                tag
              }).toString()
            })
          }
        />
      ))}
    </Flex>
  );
};

export default Tags;
