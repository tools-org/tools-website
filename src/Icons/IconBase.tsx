"use client";
import * as React from "react";
import cx from "clsx";

export interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
}

interface IconBaseProps extends IconProps {
  children: React.ReactNode;
}

const IconBase: React.FC<IconBaseProps> = (props) => {
  const { className, onClick = () => {}, style = {}, children } = props;
  return (
    <span
      className={cx("tools-icon", className)}
      role="img"
      style={style}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default IconBase;
