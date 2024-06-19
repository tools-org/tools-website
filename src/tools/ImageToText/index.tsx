'use client'
import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, message, Space, Spin, Typography } from 'antd';
import axios from 'axios';
import { useRef, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import Tesseract from 'tesseract.js';
import ImageDisplay from './Display';
import './index.css';
import { TOOLS_KEY_ENUM } from '@/types';

const ImageToText = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [textResult, setTextResult] = useState('');
  const [fileName, setFileName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    string | null | ArrayBuffer>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [show, setShow] = useState(true);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

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
      setLoading(false);
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
  const handleOCR = async () => {
    if (!imageUrl && !selectedFile) {
      setErrorMessage('请选择一个图片文件或粘贴图片URL');
      return;
    }
    try {
      setLoading(true);
      let imageForOCR: any;
      if (imageUrl) {
        const response = await axios.get(imageUrl, {
          responseType: 'arraybuffer',
        });
        const blob = new Blob([response.data]);
        imageForOCR = new File([blob], 'image.jpg');
      } else {
        imageForOCR = selectedFile;
      }
      const result = await Tesseract.recognize(imageForOCR, 'chi_sim+eng');
      const FormText = result.data.text.replace(/\s*/g, '');
      const ResultText = isMeaningfulText(FormText);
      setTextResult(ResultText);
      setLoading(false);
    } catch (error) {
      setErrorMessage('提取文字时发生错误: ' + error);
    }
  };
  const handleChange = (e: any) => {
    setTextResult(e.target.value);
  };
  const handleReupload = () => {
    setSelectedFile(null);
    setImageUrl('');
  };
  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
    setLoading(false);
    setImageUrl('');
    setTextResult('');
    setShow(true);
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
    setLoading(false);
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
    <div style={{ marginTop: '40px' }}>
      {/* <Upload  onChange={handleFileChange}></Upload> 可以用update加上图片预览*/}
      {imageUrl || selectedFile ? (
        <>
          <div className="tools-ImageToText">
            {imageUrl && (
              <ImageDisplay imageUrl={imageUrl} altText="Pasted Image" />
            )}
            {selectedImage && (
              <ImageDisplay imageUrl={selectedImage} altText="Selected" />
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="primary" onClick={handleReupload}>
              重新选择
            </Button>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={hiddenFileInput}
              style={{ display: 'none' }}
            />
            <Button type="primary" onClick={handleOCR}>
              提取文字
            </Button>
          </div>
        </>
      ) : (
        <div className="tools-ImageToText">
          <div>
            <Button onClick={handleClick} icon={<UploadOutlined />}>
              选择文件
            </Button>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={hiddenFileInput}
              style={{ display: 'none' }}
            />
            <br></br>
          </div>
          <Space direction="vertical" style={{ width: '110px' }}>
            <Input placeholder="粘贴图片URL" onChange={handleImageUrlChange} />
          </Space>
        </div>
      )}
      {/* <Text type="secondary">{fileName}</Text> */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {loading ? (
        <div>
          <Spin style={{ display: 'flex', justifyContent: 'center' }}></Spin>
        </div>
      ) : (
        ''
      )}
      {(textResult || '') && (
        <div>
          <TextArea
            value={textResult}
            onChange={handleChange}
            style={{ minHeight: '10em' }}
          />
          <br />
          <Button
            onClick={() => {
              handleCopy(textResult);
            }}
          >
            复制
          </Button>
          </div>
      )}
    </div>
  );
};

export default ToolModule(ImageToText, TOOLS_KEY_ENUM.ImageToText);