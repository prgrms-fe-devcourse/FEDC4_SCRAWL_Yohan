import { HTMLAttributes } from "react";

import { css } from "@emotion/react";

import useClickAway from "@hooks/useClickAway";

import { Combine } from "@type/Combine";

const DropdownBackground = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
      `}
      {...props}
    />
  );
};

type DropdownContainerProps = Combine<
  {
    children: React.ReactNode;
    onClose: () => void;
  },
  HTMLAttributes<HTMLDivElement>
>;

const DropdownContainer = ({
  children,
  onClose,
  ...props
}: DropdownContainerProps) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose && onClose();
  });

  return (
    <div
      ref={ref}
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        z-index: 2000;
        animation: 0.2s ease 0s 1 fadeIn;
      `}
      {...props}>
      {children}
    </div>
  );
};

type DropdownProps = Combine<
  {
    children: React.ReactNode;
    visible: boolean;
    onClose: () => void;
  },
  HTMLAttributes<HTMLDivElement>
>;

const Dropdown = ({ children, visible, onClose, ...props }: DropdownProps) => {
  if (!visible) {
    return null;
  }

  return (
    <>
      <DropdownBackground />
      <DropdownContainer onClose={onClose} {...props}>
        {children}
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
