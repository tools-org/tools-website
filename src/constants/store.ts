import { PRIMARY_COLOR } from '@/constants';
import { TOOLS_KEY_ENUM } from '@/types';

// 初始化数据
export const INITAL_STORE = {
  [TOOLS_KEY_ENUM.ColorPicker]: {
    value: PRIMARY_COLOR,
    collection: [
      {
        key: PRIMARY_COLOR,
        title: PRIMARY_COLOR,
        value: PRIMARY_COLOR,
      },
    ],
  },
  [TOOLS_KEY_ENUM.Json]: {
    value: JSON.stringify({
      private: true,
      scripts: {
        dev: 'umi dev',
        start: 'umi dev',
        build: 'umi build',
        prettier: "prettier --write '**/*.{js,jsx,tsx,ts,less,md,json}'",
        test: 'umi-test',
        'test:coverage': 'umi-test --coverage',
      },
      gitHooks: {
        'pre-commit': 'lint-staged',
      },
      'lint-staged': {
        '*.{js,jsx,less,md,json}': ['prettier --write'],
        '*.ts?(x)': ['prettier --parser=typescript --write'],
      },
    }),
  },
  [TOOLS_KEY_ENUM.Diff]: {
    soureceValue: '',
    targetValue: '',
  },
  [TOOLS_KEY_ENUM.Regexp]: {
    regValue: '',
    contentValue: '',
  },
  [TOOLS_KEY_ENUM.Base64Coding]: {},
  [TOOLS_KEY_ENUM.CountDownTimer]: {},
  [TOOLS_KEY_ENUM.HtmlEscape]: {},
  [TOOLS_KEY_ENUM.ImageCompress]: {},
  [TOOLS_KEY_ENUM.ImageEditor]: {},
  [TOOLS_KEY_ENUM.ImageToText]: {},
  [TOOLS_KEY_ENUM.Markdown]: {},
  [TOOLS_KEY_ENUM.Mortgage]: {},
  [TOOLS_KEY_ENUM.Prepayment]: {},
  [TOOLS_KEY_ENUM.QrCodeDecode]: {},
  [TOOLS_KEY_ENUM.UrlParse]: {},
  [TOOLS_KEY_ENUM.UrlCoding]: {},
  [TOOLS_KEY_ENUM.Timer]: {},
  [TOOLS_KEY_ENUM.TextStatistics]: {},
  [TOOLS_KEY_ENUM.TemperatureConverter]: {},
  [TOOLS_KEY_ENUM.RandomGenerator]: {},
  [TOOLS_KEY_ENUM.QrCodeGenerate]: {},
  [TOOLS_KEY_ENUM.WriteOnline]: {},
};
