import { Button, Dropdown } from "antd";
import { BiUser } from "react-icons/bi";
import { useAuth } from "../contexts/authContext";

export const MenuUser = () => {
  const { user, handleLogout } = useAuth();


  const items = [
    {
      key: "1",
      label: (
        `Hello ${user.user}`
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={handleLogout}>
          Logout
        </div>
      ),
      
    },
   
  ];
  return (
    <Dropdown menu={{ items }} placement="topRight">
      <Button><BiUser /></Button>
    </Dropdown>
  );
};
