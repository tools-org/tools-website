import { Button, Input, Space } from 'antd';
import { useState } from 'react';

export interface ImportFromUrlProps {
  onLoad: (v: any) => Promise<any>;
}

const ImportFromUrl = () => {
  const [url, setUrl] = useState('');
  const handleImport = async () => {};

  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input placeholder="输入url" />
      <Button type="primary">获取</Button>
    </Space.Compact>
  );
};

export default ImportFromUrl;
