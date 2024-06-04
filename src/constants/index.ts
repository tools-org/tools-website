import { TOOLS_CATEGORY_ENUM } from '@/types';

export const classPrefix = 'tools';

export const THEME_COLOR = '#1d2e54'; // 主题色

// 分类
export const TOOLS_CATEGORY = {
  [TOOLS_CATEGORY_ENUM.DEVELOP]: {
    title: '开发',
    key: TOOLS_CATEGORY_ENUM.DEVELOP,
  },
  [TOOLS_CATEGORY_ENUM.IMAGE]: {
    title: '图片',
    key: TOOLS_CATEGORY_ENUM.IMAGE,
  },
  [TOOLS_CATEGORY_ENUM.TEXT]: {
    title: '文本',
    key: TOOLS_CATEGORY_ENUM.TEXT,
  },
  [TOOLS_CATEGORY_ENUM.TIME]: {
    title: '时间',
    key: TOOLS_CATEGORY_ENUM.TIME,
  },
  [TOOLS_CATEGORY_ENUM.TRANSFORM]: {
    title: '转换器',
    key: TOOLS_CATEGORY_ENUM.TRANSFORM,
  },
  [TOOLS_CATEGORY_ENUM.CODEC]: {
    title: '编解码',
    key: TOOLS_CATEGORY_ENUM.CODEC,
  },
};
