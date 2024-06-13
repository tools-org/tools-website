import { Button, Upload } from 'antd';
import React, { useState } from 'react';

export interface FilePickerProps {
  children?: React.ReactNode;
  accept: string;
  onLoad?: (v: any) => void; // 文件加载完成
}

/**
 * 本地选择文件，解析成文本或者 url 给到组件使用
 */
const FilePicker = (props: FilePickerProps) => {
  const { children, accept, onLoad } = props;
  const [loading, setLoading] = useState<boolean>(false);

  const handleFilePicker = ({
    file,
    fileList,
  }: {
    file: any;
    fileList: any;
  }) => {
    // if (!(files && files.length)) return;
    // const file = files[0];
    setLoading(true);
    const reader = new FileReader();
    reader.readAsText(file.originFileObj, 'utf-8');
    reader.onload = () => {
      onLoad?.(reader.result as string);
      setLoading(false);
    };
  };

  return (
    <Upload accept={accept} showUploadList={false} onChange={handleFilePicker}>
      {children ? children : <Button loading={loading}>选择文件</Button>}
    </Upload>
  );
};

export default FilePicker;
