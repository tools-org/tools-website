import * as React from "react";

export interface IconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  svgStyle?: React.CSSProperties;
}

interface IconBaseProps extends IconProps {
  children: React.ReactNode;
}

const IconBase: React.FC<IconBaseProps> = (props) => {
  const { className, onClick = () => {}, style = {}, children } = props;
  return (
    <span className="fett-icon" role="img" style={style}>
      {children}
    </span>
  );
};

export default IconBase;
