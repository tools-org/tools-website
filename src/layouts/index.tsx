import { ConfigProvider } from 'antd';

import { PRIMARY_COLOR } from '@/constants';
import Contanier from './Container';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

import './index.css';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
       {children}
      </Contanier>
      <Footer />
    </ConfigProvider>
  );
};

export default Layout;
