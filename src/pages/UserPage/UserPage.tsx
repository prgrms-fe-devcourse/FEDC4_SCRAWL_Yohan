import { ChangeEventHandler, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";
import { scrawlToast } from "@components/toast";

import { useUserProfileUploadMutation } from "@hooks/api/useUserProfileUploadMutation";
import { useUserQuery } from "@hooks/api/useUserQuery";
import { useUserUpdateMutation } from "@hooks/api/useUserUpdateMutation";

import { PATH } from "@constants/index";
import { WIDTH_MAP } from "@constants/media";
import { nicknamePattern } from "@constants/regex";

import { testRegex } from "@utils/testRegEx";

import ArticleList from "./ArticleList";
import ChannelList from "./ChannelTab";
import UserInfo from "./UserInfo";

const UserPage = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  if (!userId) {
    throw Error("There is no userId!");
  }

  const userUpdateMutation = useUserUpdateMutation(userId);
  const userProfileUploadMutation = useUserProfileUploadMutation(userId);
  const { user } = useUserQuery(userId);

  const [editMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState("");
  const [currentChannel, setCurrentChannel] = useState("all");

  const handleMovePasswordPage = () => {
    navigate(PATH.PASSWORD);
  };
  const handleEditModeOn = () => {
    setEditMode(true);
    setFullName(user.fullName);
  };
  const handleEditModeOff = () => {
    if (!testRegex(nicknamePattern, fullName)) {
      scrawlToast.error("닉네임 형식이 맞지 않습니다.");
      return;
    }
    setEditMode(false);
    userUpdateMutation.mutate({ fullName });
    scrawlToast.success("잠시 후 닉네임이 변경 됩니다.");
  };
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFullName(e.currentTarget.value);
  };
  const handleUpdateCurrentChannel = (id: string) => {
    setCurrentChannel(id);
  };
  const handleUpdateCurrentImageFile: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.files) {
      return;
    }
    userProfileUploadMutation.mutate({
      isCover: false,
      image: e.target.files[0]
    });
    scrawlToast.success("잠시 후 프로필이 변경 됩니다.");
  };

  return (
    <Flex
      css={css`
        width: 100%;
        margin: 20px 0;
      `}>
      <Flex
        direction="column"
        css={css`
          padding-right: 20px;
          box-sizing: border-box;
          width: calc(100vw - 400px);
          min-width: ${WIDTH_MAP.sm}px;
          max-width: ${WIDTH_MAP.lg + 20}px;
        `}>
        <UserInfo
          editMode={editMode}
          fullName={fullName}
          user={user}
          handleMovePasswordPage={handleMovePasswordPage}
          handleUpdateCurrentImageFile={handleUpdateCurrentImageFile}
          handleInputChange={handleInputChange}
          handleEditModeOn={handleEditModeOn}
          handleEditModeOff={handleEditModeOff}
        />
        <ChannelList
          handleUpdateCurrentChannel={handleUpdateCurrentChannel}
          currentChannel={currentChannel}
        />
        <ArticleList userId={userId} currentChannel={currentChannel} />
      </Flex>
    </Flex>
  );
};

export default UserPage;
