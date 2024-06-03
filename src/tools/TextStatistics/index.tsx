import { CompressOutlined } from '@fett/icons';
import { Statistic } from 'antd';
import { Fragment, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import { formatBytes } from '@/utils';

const TextStatistics = () => {
  const [text, setText] = useState('');
  const [encodingType, setEncodingType] = useState('utf8');
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  //基本上都使用utf8 ，其他的用不到
  const getSizeInBytes = () => {
    switch (encodingType) {
      case 'utf8':
        return getStringSizeInBytes(text);
      case 'utf16':
        return getStringSizeInBytesUTF16(text);
      case 'utf32':
        return getStringSizeInBytesUTF32(text);
      default:
        return getStringSizeInBytes(text);
    }
  };

  const getStringSizeInBytes = (text: string) => {
    const encoder = new TextEncoder();
    const encodeText = encoder.encode(text);
    return encodeText.buffer.byteLength;
  };

  const getStringSizeInBytesUTF16 = (text: string) => {
    return text.length * 2;
  };
  const getStringSizeInBytesUTF32 = (text: string) => {
    const array = new Uint32Array(text.length);
    // 将字符串转换为UTF-32编码的数组
    for (let i = 0; i < text.length; i++) {
      array[i] = text.charCodeAt(i);
    }
    const buffer = array.buffer;
    return buffer.byteLength;
  };
  function calculateVisualLines(
    text: any,
    containerWidth: any,
    fontSize: number,
    lineHeight: any,
  ) {
    const tempElement = document.createElement('div');
    tempElement.style.position = 'absolute';
    tempElement.style.width = `${containerWidth}px`;
    tempElement.style.fontSize = `${fontSize}px`;
    tempElement.style.lineHeight = lineHeight;
    tempElement.style.visibility = 'hidden';
    tempElement.textContent = text;
    document.body.appendChild(tempElement);

    const lines = tempElement.clientHeight / lineHeight;
    document.body.removeChild(tempElement);
    return lines;
  }
  return (
    <Fragment>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="请输入文本..."
        rows={10}
        style={{
          resize: 'vertical',
          width: '100%',
          borderRadius: '4px',
          margin: '20px auto',
          lineHeight: '10px',
          fontSize: '16px',
        }} // 添加样式以允许调整大小和宽度自适应
      />

      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <Statistic title="字符数" value={text.length} style={{ flex: 1 }} />
        <Statistic
          title="单词数"
          value={text === '' ? 0 : text.split(/\s+/).length}
          style={{ flex: 1 }}
        />
        <Statistic
          title="行数"
          value={text === '' ? 0 : text.split(/\r\n|\r|\n/).length}
          style={{ flex: 1 }}
        />
        {/* <Statistic title="行数" value={text === '' ? 0 : calculateVisualLines(text, 796.8, 16, 10)} style={{ flex: 1 }} /> */}

        <Statistic
          title="字节数"
          value={formatBytes(getStringSizeInBytes(text))}
          style={{ flex: 1 }}
        />
      </div>
    </Fragment>
  );
};

export default ToolModule(TextStatistics, {
  key: 'TextStatistics',
  title: '文本统计',
  description: '文本字符数，字节数，行数等统计',
  path: 'text-statistics',
  icon: <CompressOutlined />,
  keywords: ['count', '统计'],
  category: TOOLS_CATEGORY_ENUM.DEVELOP,
});
