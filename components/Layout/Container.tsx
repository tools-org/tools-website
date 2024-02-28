import React from "react";

type Props = {
  children: React.ReactNode;
};

const Contanier = ({ children }: Props) => {
  return (
    <section
      style={{
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "16px",
        marginRight: "16px",
        overflowY: "hidden",
        padding:16
      }}
    >
      {children}
    </section>
  );
};

export default Contanier;
