import { Link } from 'umi';

const Header = () => {
  return (
    <header
      style={{
        paddingLeft: '16px',
        paddingRight: '16px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 100,
        height: 60,
        backgroundColor: '#f7f9fb',
      }}
    >
      {/* @ts-ignore */}
      <Link
        to="/"
        style={{
          fontWeight: 700,
          fontSize: '2.25rem',
          alignItems: 'center',
          margin: 0,
          display: 'flex',
          textDecoration: 'none',
        }}
      >
        <img src="/logo.svg" alt="Toast Tools Logo" width={36} height={36} />
        <h1
          style={{
            fontSize: 24,
            color: '#4a596d',
            paddingLeft: 6,
            margin: 0,
          }}
        >
          吐司工具
        </h1>
      </Link>
    </header>
  );
};

export default Header;
