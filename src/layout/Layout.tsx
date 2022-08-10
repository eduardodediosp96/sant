import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
