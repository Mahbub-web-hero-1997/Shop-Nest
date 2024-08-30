import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import { Outlet } from "react-router-dom";

const Root_Page = () => {
  return (
    <>
      <div className="px-2">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Root_Page;
