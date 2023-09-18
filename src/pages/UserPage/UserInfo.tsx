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
    <>
      <Flex
        justify="end"
        css={css`
          width: 100%;
          margin-bottom: 30px;
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
      <Flex
        css={css`
          width: 100%;
          height: 150px;
          margin-bottom: 30px;
        `}>
        <Flex
          justify="center"
          css={css`
            width: 33%;
          `}>
          <label htmlFor="uploadImageFile">
            <Image
              css={css`
                cursor: pointer;
                border-radius: 50%;
                border: 1px solid ${theme.BORDER100};
              `}
              src={user.image || placeholderUser}
              width={150}
              height={150}
              alt={"이미지를 불러올 수 없습니다."}
              mode="contain"></Image>
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
            width: 66%;
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
                height="15px"
                fontSize="15px"
                value={fullName}
                background={theme.BORDER100}
              />
            ) : (
              <Text children={user.fullName} size={15} />
            )}

            {editMode ? (
              <Icon
                css={css`
                  cursor: pointer;
                `}
                onClick={handleEditModeOff}
                Svg={Done}
                size={15}
              />
            ) : (
              user._id === loggedInUser.data?._id && (
                <Icon
                  css={css`
                    cursor: pointer;
                  `}
                  onClick={handleEditModeOn}
                  Svg={Edit}
                  size={15}
                />
              )
            )}
          </Flex>
          <div>{user.posts.length} posts</div>
        </Flex>
      </Flex>
    </>
  );
};

export default UserInfo;
