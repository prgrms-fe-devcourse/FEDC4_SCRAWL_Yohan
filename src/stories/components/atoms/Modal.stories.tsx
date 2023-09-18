import { useState } from "react";

import { css } from "@emotion/react";
import { Meta, StoryObj } from "@storybook/react";

import Modal from "@components/atoms/Modal";

const meta = {
  title: "components/atoms/Modal",
  component: Modal,
  tags: ["autodocs"]
} satisfies Meta<typeof Modal>;

export default meta;

const Component = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        css={css`
          cursor: pointer;
        `}
        onClick={() => setIsModalOpen(true)}>
        모달 열기
      </div>
      <Modal visible={isModalOpen}>
        <Modal.Background />
        <Modal.Container
          onClose={() => setIsModalOpen(false)}
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 500px;
            height: 400px;
            background-color: white;
          `}>
          <h1>모달입니다</h1>
        </Modal.Container>
      </Modal>
    </>
  );
};

export const Default: StoryObj = {
  render: () => <Component />
};
