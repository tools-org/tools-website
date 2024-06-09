import _ from 'lodash';

/**
 * promise 结果转数组
 */
export function to(promise: Promise<any[]>): Promise<[any, any]> {
  return new Promise((resolve) => {
    promise.then(
      (res) => resolve([res, null]),
      (err) => resolve([null, err]),
    );
  });
}

// 判断一个值是不是空值、undefined、null、空字符串等；
export const isEmpty = (value: any) => {
  if (typeof value === 'string') {
    return value === '';
  }

  if (_.isObject(value)) {
    return _.isEmpty(value);
  }

  return value === undefined || value === null;
};

// 感觉需要废弃掉了 参考下 jsonlint-mod的代码
export const jsonParse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (err: any) {
    const result = /\d*$/.exec(err.message);
    if (!result) throw err;
    const position = Number(result[0]);
    const stringLineSplitArr = value.split('\n').map((str) => str.length);
    let line = 0;
    let column = 0;
    let index = 0;
    while (index + stringLineSplitArr[line] <= position) {
      index += stringLineSplitArr[line];
      line += 1;
    }
    column = position - index;
    const message = err.message.replace(
      `position ${position}`,
      `line ${line + 1} column ${column}`,
    );
    throw new Error(message);
  }
};

// 获取文件扩展名
export const getFilePathExt = (filePath: string) => {
  const splits = filePath.split('.');
  const ext = splits.pop();
  return ext;
};

// 数组对象去重
export const arrayObjDeWightByKey = (
  data: Array<Record<string, any>>,
  key: string,
) => {
  if (!data.length) return data;
  const map = new Map();
  for (let item of data) {
    if (!map.has(item[key])) {
      map.set(item[key], item);
    }
  }
  return Array.from(map.values());
};

// 文件大小单位
export function formatFileSize(size: number) {
  const units = new Array('Bytes', 'KB', 'MB', 'GB');
  const unit = Math.floor(Math.log(size) / Math.log(1000));
  const output = `${(size / Math.pow(1000, unit)).toFixed(2)} ${units[unit]}`;
  return output;
}

/**
 * -字符连接字符串转大写驼峰 react组件名
 */
export function toCamelCase(str: string) {
  return str
    .split('-')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}
//格式字节数为可读的字符串
export function formatBytes(bytes: number) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
//让时间按照秒分时的格式输出
export function Calculate(msTotal: number) {
  const ms = msTotal % 1000;
  const secs = ((msTotal - ms) / 1000) % 60;
  const mins = (((msTotal - ms) / 1000 - secs) / 60) % 60;
  const hours = (((msTotal - ms) / 1000 - secs) / 60 - mins) / 60;
  const hoursString = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';
  //padStart 是一个字符串方法，用于在字符串的开始添加特定字符，直到达到指定的长度。2 表示你希望最终的字符串长度至少为2个字符。'0' 是填充字符，即用来填充的字符，这里是0。
  return `${hoursString}${mins.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}
