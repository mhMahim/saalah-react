import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "@/components/layout/Navbar";
import { useLocation } from "react-router";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useStateContext } from "@/hooks/useStateContext";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { systemSettingsData } = useStateContext();

  return (
    <>
      <Helmet>
        <title>{systemSettingsData?.data?.title}</title>
      </Helmet>
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
    </>
  );
};

export default MainLayout;
