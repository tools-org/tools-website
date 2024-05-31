import React from "react";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (v: any) => void;
}

const Link = ({ to, children, className, onClick = () => {} }: LinkProps) => {
  return (
    <a className={className} href={to} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
