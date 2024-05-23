import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Contanier from './Container';

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
          minHeight: 'calc(100vh - 38px)',
          margin: '0 auto',
          paddingTop: 60,
          display: 'flex',
        }}
      >
        <Sidebar />
        <Contanier>{children}</Contanier>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
