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
          d="M511.340606 259.537455m-84.371394 0a84.371394 84.371394 0 1 0 168.742788 0 84.371394 84.371394 0 1 0-168.742788 0Z"
          fill="#000000"
          p-id="2276"
        ></path>
        <path
          d="M511.340606 512.674909m-84.371394 0a84.371394 84.371394 0 1 0 168.742788 0 84.371394 84.371394 0 1 0-168.742788 0Z"
          fill="#000000"
          p-id="2277"
        ></path>
        <path
          d="M511.340606 765.781333m-84.371394 0a84.371394 84.371394 0 1 0 168.742788 0 84.371394 84.371394 0 1 0-168.742788 0Z"
          fill="#000000"
          p-id="2278"
        ></path>
      </svg>
    </IconBase>
  );
}
