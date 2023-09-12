import { css } from "@emotion/react";
import DOMPurify from "dompurify";

import Flex from "@components/atoms/Flex";
import UserInfo from "@components/molecules/UserInfo";

import { useThemeStore } from "@stores/theme.store";

import like from "@assets/svg/like.svg";

type QuestionBoxProps = {
  imageSrc: string | undefined;
  questionAuthorName: string;
  questionContent: string;
};

const QuestionBox = ({
  imageSrc,
  questionAuthorName,
  questionContent
}: QuestionBoxProps) => {
  const theme = useThemeStore((state) => state.theme);

  const htmlContent = questionContent;
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  return (
    <Flex
      justify="center"
      align="center"
      css={css`
        position: relative;
        width: 100%;
        box-shadow: ${theme.SHADOW};
        background: ${theme.BACKGROUND100};
        border-radius: 0.4em;
        padding: 20px;
      `}>
      <Flex
        direction="column"
        css={css`
          width: 98%;
          gap: 15px;
        `}>
        <UserInfo
          imageSrc={imageSrc || like}
          imgWidth={40}
          username={questionAuthorName}
          fontSize={16}
          css={css`
            font-weight: 600;
          `}
        />
        <Flex
          css={css`
            font-size: 14px;
          `}>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionBox;
