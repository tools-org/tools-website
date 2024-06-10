import { ToolsModule, TOOLS_CATEGORY_ENUM, TOOLS_KEY_ENUM } from "@/types";
import { CheckOutLined } from "@/icons";

export type ModuleConfig = {
  [k in TOOLS_KEY_ENUM]: Omit<ToolsModule, "component">;
};

/**
 * 模块配置
 * */
// @ts-ignore
export const moduleConfig: ModuleConfig = {
  [TOOLS_KEY_ENUM.Base64Coding]: {
    key: TOOLS_KEY_ENUM.Base64Coding,
    title: "base64 编解码",
    description: "base64 编解码",
    path: "base64-coding",
    icon: <CheckOutLined />,
    keywords: ["base64", "decode", "base64 编解码"],
    category: TOOLS_CATEGORY_ENUM.TRANSCODING,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.UrlParse]: {
    key: TOOLS_KEY_ENUM.UrlParse,
    title: "URL 解析",
    description:
      "解析url字符串以获取所有不同的部分（协议、来源、参数、端口、用户名密码…）",
    path: "url-parse",
    icon: <CheckOutLined />,
    keywords: ["url"],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
};
