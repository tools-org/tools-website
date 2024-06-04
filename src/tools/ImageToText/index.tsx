import { UploadOutlined } from '@ant-design/icons';
import { UpdateOutlined } from '@fett/icons';
import { Button, Input, message, Space, Spin, Typography } from 'antd';
import { useRef, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import Tesseract from 'tesseract.js';
import './index.css';

const ImageToText = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [textResult, setTextResult] = useState('');
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const hiddenFileInput = useRef(null);

  const { Text } = Typography;
  const { TextArea } = Input;
  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
      setErrorMessage('');
      setFileName(file.name);
    }
  };
  function isMeaningfulText(text: any) {
    const nonMeaningfulCharRegex = /[^a-zA-Z0-9\u4e00-\u9fa5]/g;
    const nonMeaningfulChars = text.match(nonMeaningfulCharRegex);
    const totalChars = text.length;

    // 计算非字母数字非汉字字符占比
    const nonMeaningfulCharRatio = nonMeaningfulChars
      ? nonMeaningfulChars.length / totalChars
      : 0;
    const MEANINGFUL_THRESHOLD = 0.3; // 根据实际情况调整此阈值

    // 同时可以检查是否有连续的特殊字符，以增强判断准确性
    const consecutiveSpecialCharRegex = /[^a-zA-Z0-9\u4e00-\u9fa5]{4,}/;
    const hasConsecutiveSpecialChars = consecutiveSpecialCharRegex.test(text);

    if (
      nonMeaningfulCharRatio < MEANINGFUL_THRESHOLD &&
      !hasConsecutiveSpecialChars
    ) {
      return text;
    } else {
      message.error(
        '提取到的可能是无意义的文本，请确保上传包含清晰可读文字的图片。',
      );
    }
  }
  const handleOCR = async () => {
    if (!selectedFile) {
      setErrorMessage('请选择一个图片文件');
      return;
    }
    try {
      setLoading(true);
      const result = await Tesseract.recognize(selectedFile, 'chi_sim+eng');
      const FormText = result.data.text.replace(/\s*/g, '');
      const pattern = /\b\d{1,9}(?=\D)/g;
      const formattedText = FormText.replace(pattern, '\n$&');
      const ResultTetx = isMeaningfulText(formattedText);
      setTextResult(ResultTetx);
      setLoading(false);
    } catch (error) {
      setErrorMessage('请输入可提取文字的图片文件 ' + error);
    }
  };
  const handleChange = (e: any) => {
    setTextResult(e.target.value);
  };
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleCopy = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success('成功复制到粘贴版');
    } catch (err) {}
  };
  return (
    <div>
      {/* <Upload  onChange={handleFileChange}></Upload> 可以用update加上图片预览*/}
      <div>
        <Button onClick={handleClick} icon={<UploadOutlined />}>
          {!textResult ? '选择文件' : '重新选择'}
        </Button>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={hiddenFileInput}
          style={{ display: 'none' }}
        />
        <Text type="secondary">{fileName}</Text>
        <Button onClick={handleOCR}>提取文字</Button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {selectedImage && (
        <Space direction="vertical" style={{ marginTop: '16px' }}>
          <Text type="secondary">图片展示</Text>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: '100%', maxHeight: 300 }}
          />
        </Space>
      )}

      {loading ? (
        <div>
          <Spin
            style={{ display: 'flex', margin: 'auto', alignItems: 'center' }}
          ></Spin>
        </div>
      ) : (
        ''
      )}

      {(textResult || '') && (
        <pre className=".editable-input-input">
          <TextArea
            value={textResult}
            onChange={handleChange}
            style={{ minHeight: '10em' }}
          />{' '}
          <br />
          <Button
            onClick={() => {
              handleCopy(textResult);
            }}
          >
            复制
          </Button>
        </pre>
      )}
    </div>
  );
};

export default ToolModule(ImageToText, {
  key: 'ImageToText',
  title: '提取图片中的文字',
  description: '上传图片提取其中文字',
  path: 'image-to-text',
  icon: <UpdateOutlined />,
  keywords: ['image', '文本', '转换'],
  category: TOOLS_CATEGORY_ENUM.DEVELOP,
});
