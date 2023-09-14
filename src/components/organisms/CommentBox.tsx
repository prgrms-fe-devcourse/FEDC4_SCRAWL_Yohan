import { css } from "@emotion/react";
import DOMPurify from "dompurify";

import Flex from "@components/atoms/Flex";
import UserInfo from "@components/molecules/UserInfo";

import { useThemeStore } from "@stores/theme.store";

import placeholderUser from "@assets/svg/placeholderUser.svg";

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
        box-sizing: border-box;
        padding: 20px;
        border: 1px solid ${theme.BORDER100};
      `}>
      <Flex
        direction="column"
        css={css`
          width: 98%;
          gap: 15px;
        `}>
        <UserInfo
          imageSrc={imageSrc || placeholderUser}
          imgWidth={40}
          username={questionAuthorName}
          fontSize={16}
          css={css`
            font-weight: 600;
            color: ${theme.TEXT600};
          `}
        />
        <Flex
          css={css`
            font-size: 14px;
            color: ${theme.TEXT600};
          `}>
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionBox;
