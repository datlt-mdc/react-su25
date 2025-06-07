import React, { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import { login } from "../api/user";
import { jwtDecode } from "jwt-decode";

const LoginModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleOk = () => {
    // goi api dang nhap
    // goi ham de dong modal
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // goi api dang nhap
    // goi ham de dong modal
    setIsModalOpen(true);
  };

  const onSubmitLogin = (value) => {
    // call api
    login(value)
      .then((res) => {
        console.log("Login info ", res);

        const decoded = jwtDecode(res.token);

        console.log("Decode item", decoded)

        localStorage.setItem("token", res.token)
        localStorage.setItem("userInfo", JSON.stringify(decoded))

        messageApi.open({
          type: "success",
          content: "Login success",
        });
        props.handleLoginOk();
        //
      })
      .catch((ex) => {
        console.log(ex)
        messageApi.open({
          type: "error",
          content: "Invalid credential",
        });
      });
  };
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      {contextHolder}
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={props.isLoginModalOpen}
        onOk={props.handleLoginOk}
        onCancel={props.handleLoginCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onSubmitLogin}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default LoginModal;
