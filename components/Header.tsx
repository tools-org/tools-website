import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header
      style={{
        paddingLeft: "2rem",
        paddingRight: "2rem",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        height:80
      }}
    >
      <Link
        href="/"
        style={{
          fontWeight: 700,
          fontSize: "2.25rem",
          padding: "1rem 0",
          margin: 0,
          display: "flex",
          textDecoration: "none",
        }}
      >
        <Image
          src="/logo.svg"
          alt="Toast Tools Logo"
          width={36}
          height={36}
          priority
        />
        <h1
          style={{
            fontSize: 24,
            color: "#4a596d",
            paddingLeft:6
          }}
        >
          吐司工具
        </h1>
      </Link>
    </header>
  );
};

export default Header;
