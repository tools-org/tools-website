// 正则语法提示
export const REGEXP_SYNTAX_COMMENTS_OPTIONS = [
  {
    key: 0,
    label: '. - 除换行符以外的所有字符。',
  },
  {
    key: 1,
    label: '^ - 字符串开头。',
  },
  {
    key: 2,
    label: '$ - 字符串结尾。',
  },
  {
    key: 3,
    label: 'd,w,s - 匹配数字、字符、空格。',
  },
  {
    key: 4,
    label: '  D,W,S - 匹配非数字、非字符、非空格。',
  },
  {
    key: 5,
    label: '[abc] - 匹配 a、b 或 c 中的一个字母。',
  },
  {
    key: 6,
    label: '[a-z] - 匹配 a 到 z 中的一个字母。',
  },
  {
    key: 7,
    label: '[^abc] - 匹配除了 a、b 或 c 中的其他字母。',
  },
  {
    key: 8,
    label: ' aa|bb - 匹配 aa 或 bb。',
  },
  {
    key: 9,
    label: '? - 0 次或 1 次匹配。',
  },
  {
    key: 10,
    label: ' * - 匹配 0 次或多次。',
  },
  {
    key: 11,
    label: '{n} - 匹配 n次。',
  },
  {
    key: 12,
    label: ' {n,} - 匹配 n次以上。',
  },
  {
    key: 13,
    label: '{m,n} - 最少 m 次，最多 n 次匹配。',
  },
  {
    key: 14,
    label: '(expr) - 捕获 expr 子模式,以 \\1 使用它。',
  },
  {
    key: 15,
    label: '(?:expr) - 忽略捕获的子模式。',
  },
  {
    key: 16,
    label: '(?=expr) - 正向预查模式 expr。',
  },
  {
    key: 17,
    label: ' (?!expr) - 负向预查模式 expr。',
  },
];
