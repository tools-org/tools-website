// url 参数
export const URL_PARAMS = [
  {
    key: 'protocol',
    description: '协议',
  },
  {
    key: 'username',
    description: '用户名',
  },
  {
    key: 'password',
    description: '密码',
  },
  {
    key: 'hostname',
    description: '主机',
  },
  {
    key: 'port',
    description: '端口',
  },
  {
    key: 'pathname',
    description: '路径',
  },
  {
    key: 'hash',
    description: '哈希',
  },
  {
    key: 'searchParams',
    description: '搜索参数',
  },
];

export const URL_PARAMS_KEYS = URL_PARAMS.map((v) => v.key);
