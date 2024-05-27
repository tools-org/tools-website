import SearchBar from '@/components/SearchBar';
import { Link } from 'umi';

const Header = () => {
  return (
    <header className="tools-header">
      <Link
        to="/"
        style={{
          fontWeight: 700,
          fontSize: '2.25rem',
          alignItems: 'center',
          width: 200,
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

      <div>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
