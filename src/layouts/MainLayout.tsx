import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "@/components/layout/Navbar";
import { useLocation } from "react-router";
import Footer from "@/components/layout/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div
      className={`font-poppins min-h-screen ${isHome ? "bg-white" : "bg-[#F4F6F8]"}`}
    >
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
