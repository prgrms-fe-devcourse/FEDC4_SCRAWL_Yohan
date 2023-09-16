import { useNavigate } from "react-router-dom";

import Dropdown from "@components/atoms/Dropdown";
import Flex from "@components/atoms/Flex";
import Image from "@components/atoms/Image";
import Text from "@components/atoms/Text";

import { useNotificationsQuery } from "@hooks/api/useNotificationsQuery";
import { useNotificationsReadMutation } from "@hooks/api/useNotificationsReadMutation";

import { useThemeStore } from "@stores/theme.store";

import { PATH } from "@constants/index";

import placeholderUser from "@assets/svg/placeholderUser.svg";

import {
  getNotiDropdownOuterStyle,
  getReadButtonStyle,
  getUserImageStyle,
  notiDropdownInnerStyle
} from "./NotiDropdown.styles";

type NotiDropdownProps = {
  visible: boolean;
  onClose: () => void;
};

const NotiDropdown = ({ visible, onClose }: NotiDropdownProps) => {
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();

  const { notifications } = useNotificationsQuery();
  const { mutate: notificationsReadMutate } = useNotificationsReadMutation();

  return (
    <Dropdown
      visible={visible}
      onClose={onClose}
      css={getNotiDropdownOuterStyle(theme)}>
      <Flex direction="column">
        <button
          onClick={() => notificationsReadMutate()}
          css={getReadButtonStyle(theme)}>
          모두 읽음 처리
        </button>
        {notifications.map(({ _id, author, post, like, createdAt, seen }) => (
          <Flex
            key={_id}
            align="center"
            gap={10}
            css={notiDropdownInnerStyle}
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
                {like === null
                  ? "님이 게시글을 좋아합니다"
                  : "님이 댓글을 남겼습니다"}
              </Text>
              <Text size={10} color={theme.TEXT300}>
                {new Date(createdAt).toLocaleString()}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Dropdown>
  );
};

export default NotiDropdown;
