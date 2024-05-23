import { URL_PARAMS_KEYS } from './constants';

// 转换 url 实例为对象
export const urlConverToObject = (url: URL) => {
  const result: Record<string, any> = {};
  if (!url) return result;
  for (let key of URL_PARAMS_KEYS) {
    // @ts-ignore
    const value = url[key];
    if (value) {
      if (key === 'searchParams') {
        const params: Record<string, any> = {};
        value.forEach((v: string, k: string) => {
          Reflect.set(params, k, v);
        });
        Reflect.set(result, key, params);
      } else if (key === 'protocol') {
        Reflect.set(result, key, value.slice(0, -1));
      } else {
        Reflect.set(result, key, value);
      }
    }
  }
  return result;
};
