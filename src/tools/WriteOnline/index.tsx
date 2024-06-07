import { Button, Col, Form, Row, Segmented, Slider, Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
// import { ActionCreators } from "redux-undo";

import ColorPicker from '@/components/ColorPicker';
import ToolModule from '@/components/ToolModule';
import './index.css';

const WriteOnline = () => {
  const sigCanvas = useRef(null);
  const [signature, setSignature] = useState(null);
  const [color, setColor] = useState<string>('#000000');
  const [bgcolor, setBgColor] = useState<string>('#ffffff');
  const [history, setHistory] = useState([]);
  const [undoHistory, setUndoHistory] = useState([]);
  const [minWidth, setMinWidth] = useState(1);
  const [maxWidth, setMaxWidth] = useState(2);

  const FormItem = Form.Item;
  //测试
  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  }, [bgcolor]);
  const addSignatureToHistory = (dataURL: any) => {
    setHistory([...history, dataURL]);
    setUndoHistory([]); // 清空撤销历史，一旦有新的动作，撤销历史无效
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
    setSignature(null);
    setHistory([]);
    setUndoHistory([]);
  };

  const saveSignature = () => {
    if (sigCanvas.current) {
      const dataURL = sigCanvas.current.toDataURL('image/png');
      setSignature(dataURL);
    }
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
  const handleColorChange = (e: any) => {
    setBgColor(e);
  };
  return (
    <div className="tools-writepad">
      <FormItem label="文本颜色">
        <ColorPicker value={color} onChange={setColor} />
      </FormItem>
      <FormItem label="画布颜色">
        <ColorPicker value={bgcolor} onChange={handleColorChange} />
      </FormItem>
      <FormItem label="画布颜色">
        <Segmented
          options={['大', '中', '小']}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </FormItem>
      <Button onClick={clearSignature}>清空</Button>
      <Tooltip placement="bottom" title="撤销">
        <Button onClick={undo} disabled={history.length < 1}></Button>
      </Tooltip>

      <Tooltip placement="bottom" title="恢复">
        <Button onClick={redo} disabled={undoHistory.length === 0}></Button>
      </Tooltip>
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
      <SignatureCanvas
        ref={sigCanvas}
        minWidth={minWidth}
        maxWidth={maxWidth}
        penColor={color}
        backgroundColor={bgcolor}
        // onEnd={() => addSignatureToHistory(sigCanvas.current.toDataURL('image/png'))}
      />
      {/* <button onClick={saveSignature}>保存签名</button> */}
      {/* {signature && (
        <img src={signature} alt="Signature Preview" style={{ maxWidth: '100%' }} />
      )} */}
    </div>
  );
};

export default ToolModule(WriteOnline);
