import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { useStateContext } from "@/hooks/useStateContext";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { systemSettingsData } = useStateContext();

  const isSafari =
    typeof window !== "undefined" &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const favicon = isSafari
    ? "/favicon.png" // your static favicon path
    : systemSettingsData?.data?.favicon;

  return (
    <>
      <Helmet>
        <title>{systemSettingsData?.data?.title}</title>

        {favicon && (
          <link
            rel="icon"
            type="image/png"
            href={isSafari ? favicon : `${favicon}?v=${Date.now()}`}
            key={favicon}
          />
        )}
      </Helmet>

      <div
        className={`font-poppins min-h-screen ${
          isHome ? "bg-white" : "bg-[#F4F6F8]"
        }`}
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
