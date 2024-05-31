import { TOOLS_KEY_ENUM } from '@/types';
import { isEmpty } from 'lodash';

export interface ToolsStore {
  [TOOLS_KEY_ENUM.ColorPicker]: {
    value: string; // 当前值
    collection: Array<string>; // 收藏
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
    value: '#7b8296',
    collection: [],
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
};

const __TOOLS_STORE__ = '__TOOLS_STORE__';

const useStore = (key: TOOLS_KEY_ENUM) => {
  const localStoreValue = JSON.parse(
    localStorage.getItem(__TOOLS_STORE__) || '{}',
  );
  const store = isEmpty(localStoreValue) ? INITAL_STORE : localStoreValue;

  const getStoreData = () => {
    return store[key];
  };

  const setStoreData = (value: any) => {
    store[key] = { ...store[key], ...value };
    localStorage.setItem(__TOOLS_STORE__, JSON.stringify(store));
  };

  return { getStoreData, setStoreData };
};

export default useStore;
