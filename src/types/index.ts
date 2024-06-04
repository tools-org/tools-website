export enum TOOLS_KEY_ENUM {
  ColorPicker = 'ColorPicker',
  Diff = 'Diff',
  Json = 'Json',
  Regexp = 'Regexp',
  UrlParse = 'UrlParse',
}

export enum TOOLS_CATEGORY_ENUM {
  DEVELOP = 'DEVELOP', // 开发
  IMAGE = 'IMAGE', // 图片
  TEXT = 'TEXT', // 文本
  TIME = 'TIME', // 时间
  TRANSFORM = 'TRANSFORM', //转换器
  CODEC = 'CODEC', // 编解码
}

export interface ToolsModule {
  key: string;
  title: string;
  description: string;
  keywords: Array<string>;
  category: TOOLS_CATEGORY_ENUM;
  path: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  visible?: boolean;
  order?: number;
}
