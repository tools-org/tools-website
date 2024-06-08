import { isEmpty } from 'lodash';
import { useState } from 'react';

import { INITAL_STORE } from '@/constants';
import { TOOLS_KEY_ENUM } from '@/types';

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
