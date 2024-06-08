import { Outlet } from "react-router-dom";
import Navi from "../components/Navi";
// import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Navi />
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
