'use client'
import {
    Button,
    Col,
    Dropdown,
    Form,
    Input,
    message,
    Row,
    Segmented,
    Slider,
    Tooltip,
  } from 'antd';
  import { useRef, useState } from 'react';
  import SignatureCanvas from 'react-signature-canvas';
  // import { ActionCreators } from "redux-undo";
  
  import ColorPicker from '@/components/ColorPicker';
  import ToolModule from '@/components/ToolModule';
  import { ClearOutlined, DownloadOutlined } from '@fett/icons';
  import './index.css';
import { TOOLS_KEY_ENUM } from '@/types';
  
  type TImageFormat = 'png' | 'jpg' | 'jpeg' | 'webp';
  
  const sizeMapping = {
    大: { width: '1200px', height: '500px' },
    中: { width: '800px', height: '400px' },
    小: { width: '600px', height: '300px' },
  };
  type SizeKey = keyof typeof sizeMapping;
  const WriteOnline = () => {
    const sigCanvas = useRef<any>(null);
    const [signature, setSignature] = useState(null);
    const [color, setColor] = useState<string>('#000000');
    const [bgcolor, setBgColor] = useState<string>('#ffffff');
    const [history, setHistory] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [minWidth, setMinWidth] = useState(1);
    const [maxWidth, setMaxWidth] = useState(2);
    const [canvasSize, setCanvasSize] = useState(sizeMapping['大']);
    const [customFileName, setCustomFileName] = useState('');
  
    const FormItem = Form.Item;
  
    const clearSignature = () => {
      sigCanvas.current.clear();
      setSignature(null);
      setHistory([]);
      setCurrentIndex(-1);
    };
    const addSignatureToHistory = () => {
      if (sigCanvas.current) {
        const dataURL = sigCanvas.current.toDataURL('image');
        setHistory((prevHistory) => [...prevHistory, dataURL]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
    const undo = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        const previousDataURL = history[currentIndex - 1];
        const canvas = sigCanvas.current.getCanvas();
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
        };
        img.src = previousDataURL;
      }
    };
  
    const redo = () => {
      if (currentIndex < history.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        const nextDataURL = history[currentIndex + 1];
        const canvas = sigCanvas.current.getCanvas();
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0);
        };
        img.src = nextDataURL;
      }
    };
    const handleSizeChange = (value: SizeKey) => {
      setCanvasSize(sizeMapping[value]);
    };
    const handleDownloadImage = (format: TImageFormat) => {
      if (sigCanvas.current && history.length != 0) {
        const dataURL = sigCanvas.current.toDataURL(`image/${format}`);
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `${customFileName.trim()}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else{
        message.error('图片为空请先绘制');
        console.log(history);  
      }
    };
    return (
      <div className="tools-writepad">
        <FormItem label="文本颜色">
          <ColorPicker value={color} onChange={setColor} />
        </FormItem>
        <FormItem label="画布颜色">
          <ColorPicker value={bgcolor} onChange={setBgColor} />
        </FormItem>
        <FormItem label="画布尺寸">
          <Segmented options={['大', '中', '小']} onChange={handleSizeChange} />
        </FormItem>
        <FormItem label=" 笔刷最小宽度 ">
          <Row>
            <Col span={6}>
              <Slider min={1} max={20} onChange={setMinWidth} value={minWidth} />
            </Col>
          </Row>
        </FormItem>
        <FormItem label=" 笔刷最大宽度 ">
          <Row>
            <Col span={6}>
              <Slider min={1} max={20} onChange={setMaxWidth} value={maxWidth} />
            </Col>
          </Row>
        </FormItem>
        <Button type="primary" icon={<ClearOutlined />} onClick={clearSignature}>
          清空重绘
        </Button>
        <Tooltip placement="bottom" title="撤销">
          <Button type="primary" onClick={undo} disabled={currentIndex < 1}>
            ↶
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" title="恢复">
          <Button
            type="primary"
            onClick={redo}
            disabled={currentIndex >= history.length - 1}
          >
            ↷
          </Button>
        </Tooltip>
        <Dropdown
          trigger={['click']}
          menu={{
            items: [
              {
                label: 'png',
                key: 'png',
              },
              {
                label: 'jpg',
                key: 'jpg',
              },
  
              {
                label: 'jpeg',
                key: 'jpeg',
              },
              {
                label: 'webp',
                key: 'webp',
              },
            ],
            onClick: ({ key }) => handleDownloadImage(key as TImageFormat),
          }}
        >
          <Button type="primary" icon={<DownloadOutlined />}>
            下载图片
          </Button>
        </Dropdown>
        <Input
          style={{ width: '200px', display: 'inline-block' }}
          type="text"
          value={customFileName}
          onChange={(e) => setCustomFileName(e.target.value)}
          placeholder="请输入要下载文件的文件名"
        />
  
        <div className="tools-Cursor">
          <SignatureCanvas
            ref={sigCanvas}
            minWidth={minWidth}
            maxWidth={maxWidth}
            penColor={color}
            backgroundColor={bgcolor}
            canvasProps={{
              id: 'sigCanvas',
              width: canvasSize.width,
              height: canvasSize.height,
            }}
            onEnd={addSignatureToHistory}
          />
        </div>
      </div>
    );
  };
  

  export default ToolModule(WriteOnline, TOOLS_KEY_ENUM.WriteOnline);
