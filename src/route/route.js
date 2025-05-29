import { createBrowserRouter } from "react-router";

import DataList from "../components/dataList";
import App from "../App";
import { CreateStudentForm } from "../pages/create";
import { HomePage } from "../pages/homePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/data-list",
    element: <DataList />
  },
  {
    path:"/create-item",
    element: <CreateStudentForm/>
  },
  {
    path: "/home",
    element: <HomePage/>
  }
]);

//  "/" App
//  "/data-list" datalist.js