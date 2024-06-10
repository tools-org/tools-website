"use client";

import { Base64Coding } from "@/tools";
import { ToolComponent } from "@/components/ToolModule";

// export const metadata = {
//   title: Base64Coding.title,
//   description: Base64Coding.description,
// };

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default () => {
  console.log("Base64Coding", Base64Coding);

  return (
    // @ts-ignore
    <ToolComponent
      title={Base64Coding.title}
      description={Base64Coding.description}
      moduleKey={Base64Coding.key}
    >
      <Base64Coding.component />
    </ToolComponent>
  );
};

// export default Base64Coding.component;
