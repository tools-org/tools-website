"use client";
import { Button, Input, message } from 'antd';
import { useState } from 'react';

import ToolModule from '@/components/ToolModule';

const RandomGenerator = () => {
  const [min, setMin] = useState(1024);
  const [max, setMax] = useState(65535);
  const random = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const [currentRandom, setCurrentRandom] = useState(random(min, max));

  const handleChangemin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    const parsedValue = inputValue ? parseInt(inputValue, 10) : null;
    if (parsedValue === null || !isNaN(parsedValue)) {
      const value = parsedValue !== null ? parsedValue : '';
      setMin(Number(value));
    } else {
      message.error('请输入有效的数字');
    }
  };

  const handleChangemax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    const parsedValue = inputValue ? parseInt(inputValue, 10) : null;
    if (parsedValue === null || !isNaN(parsedValue)) {
      const value = parsedValue !== null ? parsedValue : '';
      setMax(Number(value));
    } else {
      message.error('请输入有效的数字');
    }
  };
  const handleChange = () => {
    const newNumber = random(min, max);
    setCurrentRandom(newNumber);
  };

  const handleCopy = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success('成功复制到粘贴版');
    } catch (err) {}
  };
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Input
          type="number"
          value={min}
          onChange={handleChangemin}
          maxLength={10}
          placeholder="请输入数字"
          style={{ width: '200px', textAlign: 'center' }}
        />
        <h1>一</h1>
        <Input
          type="number"
          value={max}
          maxLength={10}
          onChange={handleChangemax}
          placeholder="请输入数字"
          style={{ width: '200px', textAlign: 'center' }}
        />
      </div>
      <div className="card tools-duration">{currentRandom}</div>
      <div className="tools-controls">
        <Button
          type="primary"
          onClick={() => {
            handleCopy(currentRandom);
          }}
        >
          复制
        </Button>
        <Button type="default" onClick={handleChange}>
          刷新
        </Button>
      </div>
    </div>
  );
};

export default ToolModule(RandomGenerator);
