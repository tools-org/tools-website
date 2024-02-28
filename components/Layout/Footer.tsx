const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        height: 38,
        lineHeight: '38px',
      }}
    >
      Copyright © {new Date().getFullYear()} Tools Organization
    </footer>
  );
};

export default Footer;
