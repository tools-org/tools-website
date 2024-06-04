import { CodeOutlined } from '@fett/icons';
import { Button, Input, Space, Tooltip } from 'antd';
import { Fragment, useState } from 'react';

import ActionsBarWrap from '@/components/ActionsBarWrap';
import Copy from '@/components/Copy';
import ToolModule from '@/components/ToolModule';
import { TOOLS_CATEGORY_ENUM } from '@/types';
// import Icon from '@/components/Icon';

const TextArea = Input.TextArea;

const UrlCoding = () => {
  const [decodeValue, setDecodeValue] = useState<string>('');
  const [encodeValue, setEncodeValue] = useState<string>('');

  const handleEncode = () => {
    const res = encodeURIComponent(decodeValue);
    setEncodeValue(res);
  };

  const handleDecode = () => {
    const res = decodeURIComponent(encodeValue);
    setDecodeValue(res);
  };

  return (
    <Fragment>
      <ActionsBarWrap palcement="right">
        <Copy value={decodeValue} size={18} />
        <Tooltip placement="bottom" title="清除">
          {/* <Icon type="icon-shanchu" size={18} onClick={() => setDecodeValue('')} /> */}
        </Tooltip>
      </ActionsBarWrap>
      <TextArea
        spellCheck={false}
        rows={12}
        placeholder="请输入待编码内容"
        value={decodeValue}
        onChange={(e) => setDecodeValue(e.target.value)}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
        }}
      >
        <Space style={{ margin: '12px 0' }}>
          <Button type="primary" onClick={handleEncode}>
            编码
          </Button>
          <Button type="primary" onClick={handleDecode}>
            解码
          </Button>
        </Space>
        <ActionsBarWrap palcement="right">
          <Copy value={encodeValue} size={18} />
          <Tooltip placement="bottom" title="清除">
            {/* <Icon
              type="icon-shanchu"
              size={18}
              onClick={() => setEncodeValue('')}
            /> */}
          </Tooltip>
        </ActionsBarWrap>
      </div>

      <TextArea
        spellCheck={false}
        rows={12}
        placeholder="请输入待解码内容"
        value={encodeValue}
        onChange={(e) => setEncodeValue(e.target.value)}
      />
    </Fragment>
  );
};

export default ToolModule(UrlCoding, {
  key: 'UrlCoding',
  title: 'url 编解码',
  description: 'url 编解码',
  path: 'url-coding',
  icon: <CodeOutlined />,
  keywords: ['url', 'decode', 'url 编解码'],
  category: TOOLS_CATEGORY_ENUM.TRANSCODING,
});
