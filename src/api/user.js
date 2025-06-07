import axios from "axios";

export async function login(loginInfo) {
  // keo api
  const response = await axios.post(
    "https://fakestoreapi.com/auth/login",
    loginInfo
  );
  console.log("Token after login: ", response.data);
  

  return response.data;
}
