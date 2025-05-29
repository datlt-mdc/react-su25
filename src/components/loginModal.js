import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const LoginModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    // goi api dang nhap
    // goi ham de dong modal
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={props.isLoginModalOpen}
        onOk={props.handleLoginOk}
        onCancel={props.handleLoginCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default LoginModal;