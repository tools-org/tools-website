import { ConfigProvider } from "antd";
import { Suspense } from "react";

import { PRIMARY_COLOR } from "@/constants";
import Contanier from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { isRuningClient } from "@/utils";

import "./index.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: PRIMARY_COLOR,
        },
      }}
    >
      <Header />
      <Sidebar />
      <Contanier>
        <Suspense fallback="loading....."> {children}</Suspense>
      </Contanier>
      <Footer />
    </ConfigProvider>
  );
};

export default Layout;
