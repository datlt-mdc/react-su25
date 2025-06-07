import React, { useState } from "react";
import { Avatar, Button, Flex, Layout } from "antd";
import { BiUser } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import LoginModal from "../components/loginModal";
import { useLogout } from "../utils/getUserInfo";
import { MenuUser } from "../components/menuUser";
import { useAuth } from "../contexts/authContext";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
};

export const MainLayout = (props) => {
  const { user } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const handleLoginOk = () => {
    setIsLoginModalOpen(false);
  };
  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  console.log("item inside", props);
  return (
    <Flex gap="middle" wrap>
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        handleLoginCancel={handleLoginCancel}
        handleLoginOk={handleLoginOk}
      />
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Flex justify="space-between" wrap>
            <Avatar shape="square" size={64} icon={<CgWebsite />} />
            {user ? (
              <MenuUser />
            ) : (
              <Avatar
                shape="square"
                size={64}
                icon={<BiUser />}
                onClick={showLoginModal}
              />
            )}
          </Flex>
        </Header>

        <Content>{props.children}</Content>
        <Footer style={footerStyle}>Footer ABC</Footer>
      </Layout>
    </Flex>
  );
};
