"use client";
import { Button, Input } from 'antd';
import { Fragment, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { TOOLS_KEY_ENUM } from "@/types";
import CharacterStats from './CharacterStats';
import './index.css';

const TextStatistics = () => {
  const [text, setText] = useState('');
  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const TextArea = Input.TextArea;

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

export default ToolModule(TextStatistics,TOOLS_KEY_ENUM.TextStatistics);
