import { useNavigate } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import { EmptyAlert } from "@components/molecules/EmptyAlert";
import UserInfo from "@components/molecules/UserInfo";

import { useSearchUsersQuery } from "@hooks/api/useSearchUsersQuery";

import { useThemeStore } from "@stores/theme.store";

import { PATH } from "@constants/index";

import placeholderUser from "@assets/svg/placeholderUser.svg";

type UserSearchResultsProps = {
  searchKeyword: string;
  onClick: () => void;
};

const UserSearchResults = ({
  searchKeyword,
  onClick
}: UserSearchResultsProps) => {
  const navigate = useNavigate();
  const theme = useThemeStore((state) => state.theme);
  const { users } = useSearchUsersQuery(searchKeyword);

  return (
    <Flex
      direction="column"
      css={css`
        padding: 10px;
      `}>
      {users.map(({ _id, image, fullName }) => (
        <UserInfo
          key={_id}
          imageSrc={image || placeholderUser}
          username={fullName}
          imgWidth={32}
          fontSize={16}
          css={css`
            box-sizing: border-box;
            width: 100%;
            border-radius: 8px;
            gap: 10px;
            padding: 10px;
            cursor: pointer;
            :hover {
              background-color: ${theme.BACKGROUND200};
            }
          `}
          onClick={() => {
            onClick();
            navigate(PATH.USER(_id));
          }}
        />
      ))}
      {searchKeyword && users.length === 0 && (
        <EmptyAlert message="검색 결과가 없습니다" />
      )}
    </Flex>
  );
};

export default UserSearchResults;
