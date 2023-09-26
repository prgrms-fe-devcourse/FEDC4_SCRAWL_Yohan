import { useState } from "react";

import { css } from "@emotion/react";

import Button from "@components/atoms/Button";
import Flex from "@components/atoms/Flex";
import Modal from "@components/atoms/Modal";
import ConfirmModal from "@components/molecules/ConfirmModal";

import { Theme } from "@constants/theme";

import { getSidebarFooter } from "./Sidebar.styles";
import ThemeToggle from "./ThemeToggle";

type SidebarFooterProps = {
  theme: Theme;
  navigatePage: (page: string, channelID?: string) => void;
  isLoggedIn: boolean;
};
const SidebarFooter = ({
  theme,
  navigatePage,
  isLoggedIn
}: SidebarFooterProps) => {
  const buttonWidth = "200px";
  const buttonHeight = "40px";
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={getSidebarFooter(theme)}>
      <Flex align="center" direction="column">
        <div
          css={css`
            margin-left: 26px;
          `}>
          {isLoggedIn ? (
            <div>
              <Button
                width={buttonWidth}
                height={buttonHeight}
                background={theme.BACKGROUND200}
                color={theme.TEXT300}
                css={css`
                  margin-bottom: 10px;
                  border: 1px solid var(--border-color);
                `}
                onClick={handleToggleModal}>
                로그아웃
              </Button>
              <Modal visible={isOpen}>
                <Modal.Background></Modal.Background>
                <Modal.Container
                  onClose={handleToggleModal}
                  children={
                    <ConfirmModal
                      message="정말 로그아웃 하시겠습니까?"
                      subMessage="다시 한번 확인해 보세요!"
                      onYesButtonClick={() => navigatePage("LOGOUT")}
                      onNoButtonClick={handleToggleModal}
                    />
                  }
                />
              </Modal>
            </div>
          ) : (
            <Button
              width={buttonWidth}
              height={buttonHeight}
              css={css`
                margin-bottom: 10px;
              `}
              onClick={() => navigatePage("LOGIN")}>
              로그인
            </Button>
          )}
          <ThemeToggle width={buttonWidth} height={buttonHeight} />
        </div>
      </Flex>
    </div>
  );
};
export default SidebarFooter;
