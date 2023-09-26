import { useCallback, useRef, useState } from "react";

import { css } from "@emotion/react";

import IconText from "@components/molecules/IconText";

import { useNotificationsQuery } from "@hooks/api/useNotificationsQuery";
import { useSidebarContext } from "@hooks/contexts/useSidebarContext";

import { Theme } from "@constants/theme";

import { Alert } from "@assets/svg";

import { NotiDropdown } from "../NotiDropdown";
import { getSidebarIconText } from "./Sidebar.styles";

type NotificationItemProps = {
  theme: Theme;
  channelIconSize: number;
  channelTextSize: number;
  channelColor: string;
};

const NotificationItem = ({
  theme,
  channelIconSize,
  channelTextSize,
  channelColor
}: NotificationItemProps) => {
  const { setSidebarAppear } = useSidebarContext();
  const [isNotiDropdownOpen, setIsNotiDropdownOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const { notifications } = useNotificationsQuery();

  const getNotiDropdownPos = useCallback(() => {
    if (!notificationRef.current) {
      return { top: 0, left: 0 };
    }

    const { top, left } = notificationRef.current.getBoundingClientRect();

    return { top, left };
  }, []);

  return (
    <div
      ref={notificationRef}
      css={css`
        position: relative;
      `}>
      <IconText
        iconValue={{
          Svg: Alert,
          size: channelIconSize,
          fill: channelColor
        }}
        textValue={{
          children: "알림",
          size: channelTextSize,
          color: channelColor
        }}
        css={getSidebarIconText(theme)}
        onClick={() => setIsNotiDropdownOpen(true)}
      />
      <NotiDropdown
        notifications={notifications}
        top={getNotiDropdownPos().top}
        left={getNotiDropdownPos().left + 100}
        visible={isNotiDropdownOpen}
        onClose={() => {
          setIsNotiDropdownOpen(false);
          setSidebarAppear(false);
        }}
      />
      {notifications.length > 0 && (
        <div
          css={css`
            border: 2px solid ${theme.BACKGROUND100};
            border-radius: 50%;
            padding: 5px;
            background-color: ${theme.PRIMARY};
            position: absolute;
            top: 10px;
            left: 27px;
          `}
        />
      )}
    </div>
  );
};

export default NotificationItem;
