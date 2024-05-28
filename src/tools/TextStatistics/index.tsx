import { CompressOutlined } from '@fett/icons';
import {Fragment, useState } from "react";
import {Statistic ,Select} from 'antd';
 
import { TOOLS_CATEGORY_ENUM } from '@/types';
import { formatBytes } from '@/utils';
import ToolModule from '@/components/ToolModule';

const TextStatistics=()=>{
const [text,setText]=useState('');
const [encodingType, setEncodingType] = useState('utf8');
const handleChange=(e:any)=> {
    setText(e.target.value);
  }
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

const getStringSizeInBytes=(text: string)=>{
    const encoder=new TextEncoder();
    const encodeText=encoder.encode(text);
    return encodeText.buffer.byteLength;
  }

const getStringSizeInBytesUTF16=(text: string)=>{return text.length * 2;}
const getStringSizeInBytesUTF32=(text:string) =>{
  const array = new Uint32Array(text.length);
  // 将字符串转换为UTF-32编码的数组
  for (let i = 0; i < text.length; i++) {
    array[i] = text.charCodeAt(i);
  }
  const buffer = array.buffer;
  return buffer.byteLength;
}
  return (
 <Fragment>
     <textarea
      value={text}
      onChange={handleChange}
      placeholder="Your text..."
      rows={10}
      style={{ resize: 'vertical', width: '100%' ,borderRadius:'4px',margin:'20px auto'}} // 添加样式以允许调整大小和宽度自适应
    />

    <div style={{display:'flex' , marginTop: '1rem'}}>
    <Statistic title="Character count" value={text.length} style={{ flex: 1 }} />
      <Statistic title="Word count" value={text === '' ? 0 : text.split(/\s+/).length} style={{ flex: 1 }} />
      <Statistic title="Line count" value={text === '' ? 0 : text.split(/\r\n|\r|\n/).length} style={{ flex: 1 }} />
      <Statistic title="Byte size" value={formatBytes(getStringSizeInBytes(text))} style={{ flex: 1 }} />
    </div>
 </Fragment>

  )
}

export default ToolModule(TextStatistics, {
    key: 'TextStatistics',
    title: '文本统计',
    description: '文本字符数，字节数，行数等统计',
    path: 'text-statistics',
    icon: < CompressOutlined/>,
    keywords: ['count','统计'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
  });
  