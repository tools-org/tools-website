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
          d="M232.533333 740.266667L4.266667 512l228.266666-228.266667 59.733334 59.733334L123.733333 512l168.533334 168.533333zM791.466667 740.266667l-59.733334-59.733334 168.533334-168.533333-168.533334-168.533333 59.733334-59.733334L1019.733333 512z"
        />
        <path
          fill="#000000"
          d="M312.106667 934.058667L632.533333 58.581333l80.128 29.333334-320.426666 875.477333z"
        />
      </svg>
    </IconBase>
  );
}
