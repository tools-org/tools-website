import { ToolsModule, TOOLS_CATEGORY_ENUM, TOOLS_KEY_ENUM } from '@/types';
import {
  CodeOutlined,
  ColorOutlined,
  CompressOutlined,
  DiffOutlined,
  FeedbackOutlined,
  JsonOutlined,
  MinusOutlined,
  QrcodeOutlined,
  RegularExpressionOutlined,
  TransformOutlined,
  UpdateOutlined,
  UrlOutlined,
} from '@fett/icons';

export type ModuleConfig = {
  [k in TOOLS_KEY_ENUM]: Omit<ToolsModule, 'component'>;
};

/**
 * 模块配置
 * */
export const moduleConfig: ModuleConfig = {
  [TOOLS_KEY_ENUM.ColorPicker]: {
    title: '颜色选择器',
    key: TOOLS_KEY_ENUM.ColorPicker,
    description: '颜色选择、颜色转换等',
    path: 'color-picker',
    icon: <ColorOutlined />,
    keywords: ['color', '颜色'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Diff]: {
    key: TOOLS_KEY_ENUM.Diff,
    title: '文本diff',
    description: '文本diff',
    path: 'diff',
    icon: <DiffOutlined />,
    keywords: ['diff', '文本', '对比'],
    category: TOOLS_CATEGORY_ENUM.TEXT,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.ImageToText]: {
    key: TOOLS_KEY_ENUM.ImageToText,
    title: '提取图片中的文字',
    description: '上传图片提取其中文字',
    path: 'image-to-text',
    icon: <UpdateOutlined />,
    keywords: ['image', '文本', '转换'],
    category: TOOLS_CATEGORY_ENUM.IMAGE,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Json]: {
    key: TOOLS_KEY_ENUM.Json,
    title: 'JSON 编辑器',
    description: 'JSON 编辑、格式化、查看等能力',
    path: 'json',
    icon: <JsonOutlined />,
    keywords: ['json'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Mortgage]: {
    key: TOOLS_KEY_ENUM.Mortgage,
    title: '贷款计算器',
    description: '贷款计算器',
    path: 'mortgage-calculator',
    icon: <CodeOutlined />,
    keywords: ['贷款', '计算器', '房贷', '公积金贷'],
    category: TOOLS_CATEGORY_ENUM.CALCULATOR,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Prepayment]: {
    key: TOOLS_KEY_ENUM.Prepayment,
    title: '提前还贷计算器',
    description: '贷款计算器',
    path: 'prepayment-calculator',
    icon: <CodeOutlined />,
    keywords: ['贷款', '计算器', '房贷', '公积金贷'],
    category: TOOLS_CATEGORY_ENUM.CALCULATOR,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.QrCodeDecode]: {
    key: TOOLS_KEY_ENUM.QrCodeDecode,
    title: '二维码解析',
    description: '二维码解析',
    path: 'qrcode-decode',
    icon: <QrcodeOutlined />,
    keywords: ['qrcode', 'decode', '二维码解析'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.QrCodeGenerate]: {
    key: TOOLS_KEY_ENUM.QrCodeGenerate,
    title: '二维码生成',
    description: '二维码生成',
    path: 'qrcode-generate',
    icon: <QrcodeOutlined />,
    keywords: ['qrcode', '二维码生成'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.RandomGenerator]: {
    key: TOOLS_KEY_ENUM.RandomGenerator,
    title: '随机端口生成器',
    description: '随机生成1024-65535的随机端口号(可用于生成min-max的随机整数)',
    path: 'random-generator',
    icon: <MinusOutlined />,
    keywords: ['random', '随机生成'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.WriteOnline]: {
    key: TOOLS_KEY_ENUM.WriteOnline,
    title: '在线手字板',
    description: '在线手写签名保存',
    path: 'write-online',
    icon: <FeedbackOutlined />,
    keywords: ['write', '手写'],
    category: TOOLS_CATEGORY_ENUM.TEXT,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Regexp]: {
    key: TOOLS_KEY_ENUM.Regexp,
    title: '正则',
    description: '正则匹配，查看和替换',
    path: 'regexp',
    icon: <RegularExpressionOutlined />,
    keywords: ['regexp', '正则'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.TemperatureConverter]: {
    key: TOOLS_KEY_ENUM.TemperatureConverter,
    title: '温度转换器',
    description: '摄氏度，华氏度，兰氏度，开尔文等温度的转换',
    path: 'temperature-converter',
    icon: <MinusOutlined />,
    keywords: ['temperature', '转换'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.TextStatistics]: {
    key: TOOLS_KEY_ENUM.TextStatistics,
    title: '文本统计',
    description: '文本字符数，字节数，行数等统计',
    path: 'text-statistics',
    icon: <CompressOutlined />,
    keywords: ['count', '统计'],
    category: TOOLS_CATEGORY_ENUM.TEXT,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Timer]: {
    key: TOOLS_KEY_ENUM.Timer,
    title: '计时器',
    description: '用于观察事物的持续时间',
    path: 'timer',
    icon: <TransformOutlined />,
    keywords: ['timer'],
    category: TOOLS_CATEGORY_ENUM.TIME,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.UrlCoding]: {
    key: TOOLS_KEY_ENUM.UrlCoding,
    title: 'URL 编解码',
    description: 'url 编解码',
    path: 'url-coding',
    icon: <CodeOutlined />,
    keywords: ['url', 'decode', '编码', '解码'],
    category: TOOLS_CATEGORY_ENUM.TRANSCODING,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Base64Coding]: {
    key: TOOLS_KEY_ENUM.Base64Coding,
    title: 'base64 编解码',
    description: 'base64 编解码',
    path: 'base64-coding',
    icon: <CodeOutlined />,
    keywords: ['base64', 'decode', 'base64 编解码'],
    category: TOOLS_CATEGORY_ENUM.TRANSCODING,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.UrlParse]: {
    key: TOOLS_KEY_ENUM.UrlParse,
    title: 'URL 解析',
    description:
      '解析url字符串以获取所有不同的部分（协议、来源、参数、端口、用户名密码…）',
    path: 'url-parse',
    icon: <UrlOutlined />,
    keywords: ['url'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.HtmlEscape]: {
    key: TOOLS_KEY_ENUM.HtmlEscape,
    title: 'Html 转义',
    description: 'Html 转义',
    path: 'html-escape',
    icon: <UrlOutlined />,
    keywords: ['url'],
    category: TOOLS_CATEGORY_ENUM.TRANSCODING,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.CountDownTimer]: {
    key: TOOLS_KEY_ENUM.CountDownTimer,
    title: '倒计时',
    description: '倒计时',
    path: 'countdown-timer',
    icon: <UrlOutlined />,
    keywords: ['倒计时', 'time', 'countdown'],
    category: TOOLS_CATEGORY_ENUM.TIME,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.Markdown]: {
    key: TOOLS_KEY_ENUM.Markdown,
    title: 'Markdown 编辑器',
    description: 'Markdown 编辑器',
    path: 'markdown',
    icon: <UrlOutlined />,
    keywords: ['markdown', '编辑器'],
    category: TOOLS_CATEGORY_ENUM.TEXT,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.ImageEditor]: {
    key: TOOLS_KEY_ENUM.ImageEditor,
    title: '图片编辑器',
    description: '图片编辑器',
    path: 'image-editor',
    icon: <UrlOutlined />,
    keywords: ['图片', '编辑器'],
    category: TOOLS_CATEGORY_ENUM.IMAGE,
    visible: true,
    order: 0,
  },
  [TOOLS_KEY_ENUM.ImageCompress]: {
    key: TOOLS_KEY_ENUM.ImageCompress,
    title: '图片压缩',
    description: '图片压缩',
    path: 'image-compress',
    icon: <UrlOutlined />,
    keywords: ['图片', '压缩'],
    category: TOOLS_CATEGORY_ENUM.IMAGE,
    visible: true,
    order: 0,
  },
};
