import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Layout = () => {
  useScrollReveal();

  return (
    <>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Layout;
