import { Link } from "react-router";
import DataList from "../components/dataList";
import { MainLayout } from "../layout/mainLayout";

export const HomePage = () => {
  return (
    <MainLayout>
      <Link to={"/data-list"}> Go to student list </Link>
      <DataList />
    </MainLayout>
  );
};
