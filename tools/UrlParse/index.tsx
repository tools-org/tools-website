import { UrlOutlined, WebsiteOutlined } from '@fett/icons';
import { Descriptions, Input } from 'antd';
import { useEffect, useMemo, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import { isEmpty } from '@/utils';
import { URL_PARAMS } from './constants';
import './index.css';
import { urlConverToObject } from './utils';

const Search = Input.Search;

const UrlParse = () => {
  const [url, setUrl] = useState<string>('');
  const [isFail, setIsFail] = useState<boolean>(false);
  const [urlInstance, setUrlInstance] = useState<any>(null);
  const urlParseData = useMemo(
    () => urlConverToObject(urlInstance),
    [urlInstance],
  );

  const handleUrlParse = () => {
    if (!isEmpty(url)) {
      try {
        setUrlInstance(new URL(url));
        setIsFail(false);
      } catch (err) {
        setIsFail(true);
      }
    } else {
      setUrlInstance(null);
    }
  };

  const handleUrlChange = (e: any) => {
    const value = e.target.value;
    setUrl(value);
  };

  useEffect(() => {
    handleUrlParse();
  }, [url]);

  return (
    <div className="tools-components-url">
      <Search
        allowClear
        placeholder="在这里输入网址..."
        status={isFail ? 'error' : ''}
        enterButton="解析"
        size="large"
        addonBefore={<WebsiteOutlined />}
        onChange={handleUrlChange}
        onSearch={handleUrlParse}
        onPressEnter={handleUrlParse}
      />
      <div className="tools-components-url-parse">
        {!isEmpty(Object.keys(urlParseData)) ? (
          <Descriptions bordered column={1}>
            {Object.keys(urlParseData).map((key) => {
              const value = urlParseData[key];
              if (key === 'searchParams') {
                if (!isEmpty(value)) {
                  return (
                    <Descriptions.Item
                      key={key}
                      label={key}
                      labelStyle={{ width: 140 }}
                    >
                      <Descriptions bordered column={1}>
                        {Object.keys(value).map((k) => {
                          return (
                            <Descriptions.Item
                              key={k}
                              label={k}
                              labelStyle={{ width: 140 }}
                            >
                              {value[k]}
                            </Descriptions.Item>
                          );
                        })}
                      </Descriptions>
                    </Descriptions.Item>
                  );
                } else {
                  return [];
                }
              } else {
                return (
                  <Descriptions.Item
                    key={key}
                    label={key}
                    labelStyle={{ width: 140 }}
                  >
                    {value}
                  </Descriptions.Item>
                );
              }
            })}
          </Descriptions>
        ) : (
          <div>
            <Descriptions bordered column={1}>
              {URL_PARAMS.map((item) => {
                return (
                  <Descriptions.Item
                    key={item.key}
                    label={item.key}
                    labelStyle={{ width: 140 }}
                  >
                    {item.description}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolModule(UrlParse, {
  key: 'UrlParse',
  title: 'URL 解析',
  description:
    '解析url字符串以获取所有不同的部分（协议、来源、参数、端口、用户名密码…）',
  path: 'url-parse',
  icon: <UrlOutlined />,
  keywords: ['url'],
  category: TOOLS_CATEGORY_ENUM.DEVELOP,
});
