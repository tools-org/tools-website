import { Outlet } from 'umi';

import Contanier from './Container';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <main
        className="blog-content"
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
    </>
  );
};

export default Layout;
