import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../api/user";
import { message } from "antd";
import { jwtDecode } from "jwt-decode";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = (credential) => {
    login(credential).then((res) => {
      console.log("Login info ", res);

      const decoded = jwtDecode(res.token);

      console.log("Decode item", decoded);

      localStorage.setItem("token", res.token);
      localStorage.setItem("userInfo", JSON.stringify(decoded));
      setUser(decoded)
      messageApi.open({
        type: "success",
        content: "Login success",
      });
    }).catch(ex => {
      messageApi.open({
        type: "error",
        content: "Invalid credential",
      });
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullname");
    setUser(null);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if (token && userInfo) {
          // Khởi tạo user state với thông tin cơ bản từ localStorage
          setUser(userInfo);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("fullname");
          setUser(null);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
      } 
    };

    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,        
        handleLogin,
        handleLogout,
      }}
    >
      {contextHolder}
      {children}
    </AuthContext.Provider>
  );
};
const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
