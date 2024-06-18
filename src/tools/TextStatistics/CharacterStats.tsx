import { formatBytes } from '@/utils';
import { Card, Statistic } from 'antd';
import { useState } from 'react';
interface CharacterStatsProps {
  text: string;
}

const CharacterStats: React.FC<CharacterStatsProps> = ({ text }) => {
  const [encodingType, setEncodingType] = useState('utf8');

  const countCharacters = (text: any, pattern: any) =>
    text === '' ? 0 : (text.match(pattern) || []).length;
  const statsConfig = [
    { title: '汉字个数', pattern: /[\u4e00-\u9fff]/g },
    { title: '数字个数', pattern: /\d/g },
    { title: '字母个数', pattern: /[a-zA-Z]/g },
    { title: '字符数', getValue: () => text.length },
    {
      title: '单词数',
      getValue: () => (text === '' ? 0 : text.split(/\s+/).length),
    },
    {
      title: '行数',
      getValue: () => (text === '' ? 0 : text.split(/\r\n|\r|\n/).length),
    },
    {
      title: '字节数',
      getValue: () => formatBytes(getStringSizeInBytes(text)),
    },
  ];
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
  return (
    <>
      {statsConfig.map(({ title, pattern, getValue = () => 0 }, index) => (
        <Card
          key={index}
          title={title}
          bordered={false}
          style={{ flex: 1, textAlign: 'center' }}
        >
          <Statistic
            valueStyle={{ color: '#3f8600' }}
            value={pattern ? countCharacters(text, pattern) : getValue()}
          />
        </Card>
      ))}
    </>
  );
};

export default CharacterStats;