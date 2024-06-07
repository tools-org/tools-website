import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, message, Space, Spin, Typography } from 'antd';
import axios from 'axios';
import { useRef, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import Tesseract from 'tesseract.js';
import ImageDisplay from './Display';
import './index.css';

const ImageToText = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [textResult, setTextResult] = useState('');
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

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

    const nonMeaningfulCharRatio = nonMeaningfulChars
      ? nonMeaningfulChars.length / totalChars
      : 0;
    const MEANINGFUL_THRESHOLD = 0.3;
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
  // const handleOCR = async () => {
  //   if (!selectedFile) {
  //     setErrorMessage('请选择一个图片文件');
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     const result = await Tesseract.recognize(showPastedImage, 'chi_sim+eng');
  //     // const result = await Tesseract.recognize(selectedFile, 'chi_sim+eng');
  //     const FormText = result.data.text.replace(/\s*/g, '');
  //     const pattern = /\b\d{1,9}(?=\D)/g;
  //     const formattedText = FormText.replace(pattern, '\n$&');
  //     const ResultTetx = isMeaningfulText(formattedText);
  //     setTextResult(ResultTetx);
  //     setLoading(false);
  //   } catch (error) {
  //     setErrorMessage('请输入可提取文字的图片文件 ' + error);
  //   }
  // };

  const handleOCR = async () => {
    if (!imageUrl && !selectedFile) {
      setErrorMessage('请选择一个图片文件或粘贴图片URL');
      return;
    }
    try {
      setLoading(true);
      let imageForOCR: any;

      if (imageUrl) {
        // 如果是URL，先下载图片
        const response = await axios.get(imageUrl, {
          responseType: 'arraybuffer',
        });
        const blob = new Blob([response.data]); // 假设是JPEG格式，根据实际情况调整
        imageForOCR = new File([blob], 'image.jpg'); // 创建File对象
      } else {
        // 如果是文件，则直接使用
        imageForOCR = selectedFile;
      }

      const result = await Tesseract.recognize(imageForOCR, 'chi_sim+eng');
      const FormText = result.data.text.replace(/\s*/g, '');
      const pattern = /\b\d{1,9}(?=\D)/g;
      const formattedText = FormText.replace(pattern, '\n$&');
      const ResultText = isMeaningfulText(formattedText);
      setTextResult(ResultText);
      setLoading(false);
    } catch (error) {
      setErrorMessage('提取文字时发生错误: ' + error);
    }
  };
  const handleChange = (e: any) => {
    setTextResult(e.target.value);
  };
  const handleClick = () => {
    hiddenFileInput.current.click();
    setImageUrl('');
    setTextResult('');
  };
  const handleCopy = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success('成功复制到粘贴版');
    } catch (err) {}
  };
  const handleImageUrlChange = (e: any) => {
    setSelectedFile(null);
    setSelectedImage(null);
    setTextResult('');
    const url = e.target.value;
    // 简单的URL格式验证，根据需要可以更复杂
    // if ((url.startsWith('http')||url.startsWith('https')) && /\.(jpg|jpeg|png|gif)$/i.test(url))
    if (url) {
      setImageUrl(url);
    } else {
      message.error('请输入有效的图片URL');
    }
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
      {/* 添加图片URL输入框和按钮 */}
      <Space direction="vertical" style={{ marginTop: '16px' }}>
        <Input placeholder="粘贴图片URL" onChange={handleImageUrlChange} />
      </Space>

      {imageUrl && <ImageDisplay imageUrl={imageUrl} altText="Pasted Image" />}
      {selectedImage && (
        <ImageDisplay imageUrl={selectedImage} altText="Selected" />
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

export default ToolModule(ImageToText);
