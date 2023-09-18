import { HTMLAttributes } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import Flex from "@components/atoms/Flex";
import Tag from "@components/molecules/Tag";

import { Combine } from "@type/Combine";

import { PATH } from "@constants/index";

import { tagStyle, tagsContainerStyle } from "./Tags.styles";

type TagsProps = Combine<
  {
    tags: string[];
    gap?: number;
    size?: number;
  },
  HTMLAttributes<HTMLDivElement>
>;

const Tags = ({ tags, gap = 5, size = 12, ...props }: TagsProps) => {
  const navigate = useNavigate();

  return (
    <Flex gap={gap} css={tagsContainerStyle} {...props}>
      {tags.map((tag, i) => (
        <Tag
          key={`${tag}${i}`}
          size={size}
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
