// import { Base64Coding } from "@/tools";
import { Base64Coding } from "@/tools/Transcoding/Base64";

import { moduleConfig } from "@/components/ToolModule/config";

export const metadata = {
  title: moduleConfig["Base64Coding"].title,
  description: moduleConfig["Base64Coding"].description,
};

export default Base64Coding;
