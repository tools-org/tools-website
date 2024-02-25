import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main
        className="blog-content"
        style={{
          minHeight: "calc(100vh - 120px)",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
        }}
      >
        <Sidebar />
        <section style={{ flex: 1 }}>{children}</section>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
