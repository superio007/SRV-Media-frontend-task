import { Outlet } from "react-router-dom";
import Navbar from "../components/Main/Navbar.jsx";
import Footer from "../components/Main/Footer.jsx/index.js";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
