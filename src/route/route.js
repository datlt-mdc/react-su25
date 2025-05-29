import { createBrowserRouter } from "react-router";

import DataList from "../components/dataList";
import App from "../App";
import { CreateStudentForm } from "../pages/create";

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
  }
]);

//  "/" App
//  "/data-list" datalist.js