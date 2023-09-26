import { ChangeEventHandler } from "react";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import Icon from "@components/atoms/Icon";
import Image from "@components/atoms/Image";
import Input from "@components/atoms/Input";
import Text from "@components/atoms/Text";

import { useUserByTokenQuery } from "@hooks/api/useUserByTokenQuery";

import { useThemeStore } from "@stores/theme.store";

import { User } from "@type/models/User";

import { Done, Edit } from "@assets/svg";
import placeholderUser from "@assets/svg/placeholderUser.svg";

type UserInfoProps = {
  editMode: boolean;
  fullName: string;
  user: User;
  handleMovePasswordPage: () => void;
  handleUpdateCurrentImageFile: ChangeEventHandler<HTMLInputElement>;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  handleEditModeOn: () => void;
  handleEditModeOff: () => void;
};

const UserInfo = ({
  editMode,
  fullName,
  user,
  handleMovePasswordPage,
  handleUpdateCurrentImageFile,
  handleInputChange,
  handleEditModeOn,
  handleEditModeOff
}: UserInfoProps) => {
  const theme = useThemeStore((state) => state.theme);
  const loggedInUser = useUserByTokenQuery();
  return (
    <Flex
      gap={50}
      css={css`
        width: 100%;
        height: 150px;
        padding-left: 70px;
        margin-bottom: 30px;
        box-sizing: border-box;
        white-space: nowrap;
      `}>
      <Flex justify="center">
        <label
          htmlFor={
            user._id === loggedInUser.data?._id ? "uploadImageFile" : ""
          }>
          <Image
            css={css`
              cursor: ${user._id === loggedInUser.data?._id && "pointer"};
              border-radius: 50%;
              border: 1px solid ${theme.BORDER100};
            `}
            src={user.image || placeholderUser}
            width={150}
            height={150}
            alt={"이미지를 불러올 수 없습니다."}
            mode="cover"></Image>
        </label>
        <input
          onChange={handleUpdateCurrentImageFile}
          type="file"
          id="uploadImageFile"
          accept="image/*"
          hidden={true}
        />
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align="start"
        css={css`
          height: 100%;
          gap: 20px;
        `}>
        <Flex
          align="center"
          css={css`
            gap: 10px;
          `}>
          {editMode ? (
            <Input
              onChange={handleInputChange}
              width="100px"
              height="20px"
              fontSize="16px"
              value={fullName}
              background={theme.BORDER100}
            />
          ) : (
            <Text children={user.fullName} size={20} />
          )}

          {editMode ? (
            <Icon
              css={css`
                cursor: pointer;
              `}
              onClick={handleEditModeOff}
              Svg={Done}
              size={20}
            />
          ) : (
            user._id === loggedInUser.data?._id && (
              <Icon
                css={css`
                  cursor: pointer;
                `}
                onClick={handleEditModeOn}
                Svg={Edit}
                size={20}
              />
            )
          )}
        </Flex>
        <div>게시글 {user.posts.length}개</div>
      </Flex>
      <Flex
        justify="end"
        css={css`
          flex-grow: 1;
        `}>
        {user._id === loggedInUser.data?._id && (
          <div
            css={css`
              cursor: pointer;
            `}
            onClick={handleMovePasswordPage}>
            비밀번호 변경
          </div>
        )}
      </Flex>
    </Flex>
  );
};

export default UserInfo;
