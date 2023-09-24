import { ChangeEventHandler, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { css } from "@emotion/react";

import Flex from "@components/atoms/Flex";

import { useUserProfileUploadMutation } from "@hooks/api/useUserProfileUploadMutation";
import { useUserQuery } from "@hooks/api/useUserQuery";
import { useUserUpdateMutation } from "@hooks/api/useUserUpdateMutation";

import { PATH } from "@constants/index";
import { WIDTH_MAP } from "@constants/media";

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
    setEditMode(false);
    userUpdateMutation.mutate({ fullName });
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
          width: calc(100vw - 340px);
          min-width: ${WIDTH_MAP.sm}px;
          max-width: ${WIDTH_MAP.lg}px;
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
