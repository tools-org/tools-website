// import SearchBar from '@/components/SearchBar';
import Link from "next/link";

const Header = () => {
  return (
    <header className="tools-header">
      <Link href="/" className="tools-header-link">
        <img
          className="tools-header-logo"
          src="/logo.png"
          alt="Toast Tools Logo"
        />
        <h1 className="tools-header-title">吐司工具</h1>
      </Link>

      <div className="tools-header-actions">{/* <SearchBar /> */}</div>
    </header>
  );
};

export default Header;
