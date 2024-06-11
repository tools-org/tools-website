import React from "react";
import IconBase, { IconProps } from "./IconBase";

export default function Icon(props: IconProps) {
  return (
    <IconBase {...props}>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M135.98452636 787.9860793l174.01392071 174.0139207h445.12761006V193.20649648H135.98452636z m98.49187882 0H309.99844708V862.46403682zM205.59009482 262.81206494h479.93039385v629.23433907H379.60401553v-174.01392159H205.59009482zM233.7803501 62v69.60556846H818.11909707v733.64269131h69.60556845V62H233.7803501z"
        />
      </svg>
    </IconBase>
  );
}
