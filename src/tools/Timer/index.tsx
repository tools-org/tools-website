import { Button } from 'antd';
import { useEffect, useRef, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { Calculate } from '@/utils';
import './index.css';
const Timer = () => {
  const [isStart, setIsStart] = useState(false);
  const [counter, setCounter] = useState(0);
  const previousRef = useRef(Date.now());

  useEffect(() => {
    let animationFrameId: number;
    const updateCounter = () => {
      if (isStart) {
        const passMs = Date.now() - previousRef.current;
        previousRef.current = Date.now();
        setCounter((c) => c + passMs);
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };
    if (isStart) {
      updateCounter();
    }
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isStart]);

  const handleResume = () => {
    previousRef.current = Date.now();
    setIsStart(true);
  };

  const handlePause = () => setIsStart(false);

  const handleReset = () => setCounter(0);
  return (
    <div>
      <div className=" tools-duration">{Calculate(counter)}</div>
      <div className="tools-controls">
        {!isStart ? (
          <Button
            style={{ backgroundColor: '#18a0582f', color: '#18a058' }}
            type="primary"
            background-Color="green"
            onClick={handleResume}
          >
            开始计时
          </Button>
        ) : (
          <Button
            type="primary"
            style={{ backgroundColor: '#ffeeee', color: '#fa4d4d' }}
            onClick={handlePause}
          >
            暂停
          </Button>
        )}
        <Button type="default" onClick={handleReset}>
          重置
        </Button>
      </div>
    </div>
  );
};

export default ToolModule(Timer);
