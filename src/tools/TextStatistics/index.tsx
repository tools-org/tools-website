import { CompressOutlined } from '@fett/icons';
import { Button, Card, Statistic } from 'antd';
import { Fragment, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import { formatBytes } from '@/utils';
import './index.css';
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
        className="tools-textarea"
        value={text}
        onChange={handleChange}
        placeholder="输入(或粘贴)需要统计的文本内容..."
        rows={20}
        style={{
          borderColor: '#516E74',
          boxShadow: '0 0 0 0.125em rgba(81, 110, 116, 0.25)',
          resize: 'vertical',
          width: '99%',
          borderRadius: '4px',
          margin: '20px auto',
          lineHeight: '10px',
          fontSize: '14px',
        }} // 添加样式以允许调整大小和宽度自适应
      />
      <Button type="primary" onClick={() => setText('')}>
        全部清空
      </Button>
      <h1 className="tools-text">统计信息</h1>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <Card
          title="字符数"
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic valueStyle={{ color: '#3f8600' }} value={text.length} />
        </Card>
        <Card
          title="单词数"
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic
            valueStyle={{ color: '#3f8600' }}
            value={text === '' ? 0 : text.split(/\s+/).length}
          />
        </Card>
        <Card
          title="行数"
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic
            valueStyle={{ color: '#3f8600' }}
            value={text === '' ? 0 : text.split(/\r\n|\r|\n/).length}
          />
        </Card>
        {/* <Statistic title="行数" value={text === '' ? 0 : calculateVisualLines(text, 796.8, 16, 10)} style={{ flex: 1 }} /> */}
        <Card
          title="字节数"
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic
            valueStyle={{ color: '#3f8600' }}
            value={formatBytes(getStringSizeInBytes(text))}
          />
        </Card>
        <Card
          title="汉字个数"
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic
            valueStyle={{ color: '#3f8600' }}
            value={
              text === '' ? 0 : (text.match(/[\u4e00-\u9fff]/g) || []).length
            }
          />
        </Card>
        <Card
          title="数字个数"
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic
            valueStyle={{ color: '#3f8600' }}
            value={text === '' ? 0 : (text.match(/\d/g) || []).length}
          />
        </Card>
        <Card
          title="字母个数"
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic
            valueStyle={{ color: '#3f8600' }}
            value={text === '' ? 0 : (text.match(/[a-zA-Z]/g) || []).length}
          />
        </Card>
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
