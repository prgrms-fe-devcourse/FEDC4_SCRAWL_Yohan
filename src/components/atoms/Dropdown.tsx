import { HTMLAttributes, useEffect, useMemo } from "react";
import ReactDom from "react-dom";

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
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  },
  HTMLAttributes<HTMLDivElement>
>;

const DropdownContainer = ({
  children,
  onClose,
  top,
  bottom,
  left,
  right,
  ...props
}: DropdownContainerProps) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose && onClose();
  });

  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        top: ${top};
        bottom: ${bottom};
        left: ${left};
        right: ${right};
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
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
  },
  HTMLAttributes<HTMLDivElement>
>;

const Dropdown = ({
  children,
  visible,
  onClose,
  top,
  bottom,
  left,
  right,
  ...props
}: DropdownProps) => {
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  if (!visible) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <DropdownBackground />
      <DropdownContainer
        onClose={onClose}
        top={top}
        left={left}
        bottom={bottom}
        right={right}
        {...props}>
        {children}
      </DropdownContainer>
    </>,
    el
  );
};

Dropdown.Background = DropdownBackground;
Dropdown.Container = DropdownContainer;

export default Dropdown;
