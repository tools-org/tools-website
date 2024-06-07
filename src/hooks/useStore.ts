import { isEmpty } from 'lodash';
import { useState } from 'react';

import { PRIMARY_COLOR } from '@/constants';
import { TOOLS_KEY_ENUM } from '@/types';

export interface ToolsStore {
  [TOOLS_KEY_ENUM.ColorPicker]: {
    value: string; // 当前值
    collection: Array<{
      key: string | number;
      title: string;
      value: string;
    }>; // 收藏
  };
  [TOOLS_KEY_ENUM.Json]: {
    value: string; // 当前值
  };
  [TOOLS_KEY_ENUM.Diff]: {
    soureceValue: string;
    targetValue: string;
  };
  [TOOLS_KEY_ENUM.Regexp]: {
    regValue: string;
    contentValue: string;
  };
}

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
    value: {},
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
};

const useStore = (key: TOOLS_KEY_ENUM) => {
  const localStoreValue = JSON.parse(localStorage.getItem(key) || '{}');

  const [data, setData] = useState(
    isEmpty(localStoreValue) ? INITAL_STORE[key] : localStoreValue,
  );

  const setStoreData = (value: any) => {
    const newData = { ...data, ...value };
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  return { storeData: data, setStoreData };
};

export default useStore;
