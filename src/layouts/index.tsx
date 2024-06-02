import { ConfigProvider } from 'antd';
import { Outlet } from 'umi';

import Contanier from './Container';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#1d2e54',
        },
      }}
    >
      <Header />
      <main
        style={{
          minHeight: 'calc(-98px + 100vh)',
          margin: '0 auto',
          display: 'flex',
        }}
      >
        <Sidebar />
        <Contanier>
          <Outlet />
        </Contanier>
      </main>
      <Footer />
    </ConfigProvider>
  );
};

export default Layout;
