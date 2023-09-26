import { HTMLAttributes, useEffect, useMemo } from "react";
import ReactDom from "react-dom";

import { css } from "@emotion/react";

import useClickAway from "@hooks/useClickAway";

import { Combine } from "@type/Combine";

const ModalBackground = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
      `}
      {...props}
    />
  );
};

type ModalContainerProps = Combine<
  {
    children: React.ReactNode;
    onClose: () => void;
  },
  HTMLAttributes<HTMLDivElement>
>;

const ModalContainer = ({
  children,
  onClose,
  ...props
}: ModalContainerProps) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose && onClose();
  });

  return (
    <div
      ref={ref}
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        z-index: 2000;
        animation: 0.2s ease 0s 1 fadeIn;
      `}
      {...props}>
      {children}
    </div>
  );
};

type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
};

const Modal = ({ children, visible }: ModalProps) => {
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDom.createPortal(visible ? children : null, el);
};

Modal.Background = ModalBackground;
Modal.Container = ModalContainer;

export default Modal;
