import { Button, Input } from 'antd';
import { Fragment, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import CharacterStats from './CharacterStats';
import './index.css';

const TextStatistics = () => {
  const [text, setText] = useState('');
  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  // const { TextArea } = Input;
  const TextArea = Input.TextArea;

  function calculateVisualLines(
    text: any,
    containerWidth: any,
    fontSize: number,
    lineHeight: any,
  ) {
    const tempElement = document.createElement('div');
    tempElement.style.position = 'absolute';
    tempElement.style.width = `${containerWidth}px`;
    tempElement.style.fontSize = `${fontSize}px`;
    tempElement.style.lineHeight = lineHeight;
    tempElement.style.visibility = 'hidden';
    tempElement.textContent = text;
    document.body.appendChild(tempElement);

    const lines = tempElement.clientHeight / lineHeight;
    document.body.removeChild(tempElement);
    return lines;
  }
  return (
    <Fragment>
      <TextArea
        className="tools-textarea"
        value={text}
        onChange={handleChange}
        placeholder="输入(或粘贴)需要统计的文本内容..."
        rows={10}
        style={{
          margin: '15px auto',
          fontSize: '14px',
        }}
      />
      <Button type="primary" onClick={() => setText('')}>
        全部清空
      </Button>
      <h1 className="tools-text">统计信息</h1>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <CharacterStats text={text} />
      </div>
    </Fragment>
  );
};

export default ToolModule(TextStatistics);
