import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "@components/atoms/Dropdown";
import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import Text from "@components/atoms/Text";

import { useNotificationsQuery } from "@hooks/api/useNotificationsQuery";
import { useNotificationsReadMutation } from "@hooks/api/useNotificationsReadMutation";

import { useThemeStore } from "@stores/theme.store";

import { PATH } from "@constants/index";

import { createdAtToString } from "@utils/createdAtToString";

import placeholderUser from "@assets/svg/placeholderUser.svg";

import {
  getNotiDropdownOuterStyle,
  getReadButtonStyle,
  getUserImageStyle,
  noNotificationStyle,
  notiDropdownInnerStyle,
  notiDropdownItemStyle,
  readButtonWarpperStyle
} from "./NotiDropdown.styles";
import { filterNotifications } from "./filterNotifications";

type NotiDropdownProps = {
  visible: boolean;
  top?: number;
  left?: number;
  onClose: () => void;
};

const NotiDropdown = ({ visible, onClose, top, left }: NotiDropdownProps) => {
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();

  const { notifications: rawNotifications } = useNotificationsQuery();
  const notifications = useMemo(
    () => filterNotifications(rawNotifications),
    [rawNotifications]
  );

  const { mutate: notificationsReadMutate } = useNotificationsReadMutation();

  return (
    <Dropdown
      top={`${top}px`}
      left={`${left}px`}
      visible={visible}
      onClose={onClose}
      css={getNotiDropdownOuterStyle(theme)}>
      <Flex direction="column" css={notiDropdownInnerStyle}>
        <div css={readButtonWarpperStyle}>
          <button
            onClick={() => notificationsReadMutate()}
            css={getReadButtonStyle(theme)}>
            모두 읽음 처리
          </button>
        </div>
        {notifications.length === 0 && (
          <Flex align="center" justify="center" css={noNotificationStyle}>
            <Text size={20} strong={true}>
              새로운 알림 없음
            </Text>
          </Flex>
        )}
        {notifications.map(({ _id, author, post, like, createdAt, seen }) => (
          <Flex
            key={_id}
            align="center"
            gap={10}
            css={notiDropdownItemStyle}
            onClick={() => {
              onClose();
              post && navigate(PATH.ARTICLE(post));
            }}>
            <Image
              src={author.image || placeholderUser}
              width={40}
              height={40}
              alt="profile"
              mode="cover"
              css={getUserImageStyle(theme, seen)}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
                navigate(PATH.USER(author._id));
              }}
            />
            <Flex direction="column" gap={5}>
              <Text size={12}>
                <Text size={12} strong={true}>
                  {author.fullName}
                </Text>
                {like ? "님이 게시글을 좋아합니다" : "님이 댓글을 남겼습니다"}
              </Text>
              <Text size={10} color={theme.TEXT300}>
                {createdAtToString(new Date(createdAt))}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Dropdown>
  );
};

export default NotiDropdown;
