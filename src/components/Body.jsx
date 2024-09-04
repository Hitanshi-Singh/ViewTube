import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex mt-[4.2rem]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
