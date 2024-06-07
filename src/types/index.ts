export enum TOOLS_KEY_ENUM {
  ColorPicker = 'ColorPicker',
  Diff = 'Diff',
  Json = 'Json',
  Regexp = 'Regexp',
  UrlParse = 'UrlParse',
  ImageToText = 'ImageToText',
  Mortgage = 'Mortgage',
  Prepayment = 'Prepayment',
  QrCodeGenerate = 'QrCodeGenerate',
  QrCodeDecode = 'QrCodeDecode',
  RandomGenerator = 'RandomGenerator',
  TemperatureConverter = 'TemperatureConverter',
  TextStatistics = 'TextStatistics',
  Timer = 'Timer',
  Base64Coding = 'Base64Coding',
  UrlCoding = 'UrlCoding',
  HtmlEscape = 'HtmlEscape',
  CountDownTimer = 'CountDownTimer',
  Markdown = 'Markdown',
  ImageEditor = 'ImageEditor',
  ImageCompress = 'ImageCompress',
}

export enum TOOLS_CATEGORY_ENUM {
  DEVELOP = 'DEVELOP', // 开发
  IMAGE = 'IMAGE', // 图片
  TEXT = 'TEXT', // 文本
  TIME = 'TIME', // 时间
  TRANSFORM = 'TRANSFORM', //转换器
  TRANSCODING = 'TRANSCODING', // 编解码
  CALCULATOR = 'CALCULATOR', // 计算器
}

export interface ToolsModule {
  key: TOOLS_KEY_ENUM;
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
