import Link from "next/link";
import Image from "next/image";

import SearchBar from "@/components/SearchBar";

const Header = () => {
  return (
    <header className="tools-header">
      <Link href="/" className="tools-header-link">
        <Image
          className="tools-header-logo"
          src="/logo.png"
          alt="Toast Tools Logo"
          width={36}
          height={36}
        />
        <h1 className="tools-header-title">吐司工具</h1>
      </Link>

      <div className="tools-header-actions">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
