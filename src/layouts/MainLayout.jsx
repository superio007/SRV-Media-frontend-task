import { Outlet } from "react-router-dom";
import Navbar from "../components/Main/Navbar";
import Footer from "../components/Main/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
