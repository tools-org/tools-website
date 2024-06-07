import {
  Button,
  Col,
  Dropdown,
  Form,
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
import { DownloadOutlined } from '@fett/icons';
import './index.css';

type TImageFormat = 'png' | 'jpg' | 'jpeg' | 'webp';
const sizeMapping = {
  大: { width: '1200px', height: '500px' },
  中: { width: '800px', height: '400px' },
  小: { width: '600px', height: '300px' },
};
const WriteOnline = () => {
  const sigCanvas = useRef<any>(null);
  const [signature, setSignature] = useState(null);
  const [color, setColor] = useState<string>('#000000');
  const [bgcolor, setBgColor] = useState<string>('#ffffff');
  const [history, setHistory] = useState([]);
  const [undoHistory, setUndoHistory] = useState([]);
  const [minWidth, setMinWidth] = useState(1);
  const [maxWidth, setMaxWidth] = useState(2);
  const [canvasSize, setCanvasSize] = useState(sizeMapping['大']);

  const FormItem = Form.Item;

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignature(null);
    setHistory([]);
    setUndoHistory([]);
  };

  const undo = () => {
    if (history.length > 1) {
      const prevDataURL = history[history.length - 2];
      setSignature(prevDataURL);
      const newUndoHistory = [...undoHistory, history.pop()];
      setHistory(history);
      setUndoHistory(newUndoHistory);
    }
  };

  const redo = () => {
    if (undoHistory.length > 0) {
      const nextDataURL = undoHistory.pop();
      setSignature(nextDataURL);
      setHistory([...history, nextDataURL]);
    }
  };
  const handleDownloadImage = async (format: TImageFormat) => {
    // await Events.saveBase64ImageToLocal({
    //   fileName: `未命名.${format}`,
    //   payload: url.replace(`data:image/${format};base64,`, ''),
    //   format,
    // });
    if (sigCanvas.current) {
      setSignature('');
    }
  };
  const handleSizeChange = (value: string) => {
    // 根据Segmented的值更新画布尺寸
    setCanvasSize(sizeMapping[value]);
  };

  return (
    <div className="tools-writepad">
      <FormItem label="文本颜色">
        <ColorPicker value={color} onChange={setColor} />
      </FormItem>
      <FormItem label="画布颜色">
        <ColorPicker value={bgcolor} onChange={setBgColor} />
      </FormItem>
      <FormItem label="画布颜色">
        <Segmented options={['大', '中', '小']} onChange={handleSizeChange} />
      </FormItem>
      <Button type="primary" onClick={clearSignature}>
        清空
      </Button>
      <Tooltip placement="bottom" title="撤销">
        <Button type="primary" onClick={undo} disabled={history.length < 1}>
          ↶
        </Button>
      </Tooltip>

      <Tooltip placement="bottom" title="恢复">
        <Button
          type="primary"
          onClick={redo}
          disabled={undoHistory.length === 0}
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
          // @ts-ignore
          onClick: ({ key }) => handleDownloadImage(key as TImageFormat),
        }}
      >
        <Button type="primary" icon={<DownloadOutlined />}>
          下载图片
        </Button>
      </Dropdown>
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
          // onEnd={() => addSignatureToHistory(sigCanvas.current.toDataURL('image/png'))}
        />
      </div>
    </div>
  );
};

export default ToolModule(WriteOnline);
