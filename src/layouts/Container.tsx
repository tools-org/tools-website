import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Contanier = ({ children }: Props) => {
  return <section className="tools-container">{children}</section>;
};

export default Contanier;
