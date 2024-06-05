import { Button, message } from 'antd';
import { useEffect, useRef, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { Calculate } from '@/utils';
import './index.css';
const Timer = () => {
  const [isStart, setIsStart] = useState(false);
  const [counter, setCounter] = useState(0);
  const previousRef = useRef(Date.now());
  const [pauseRecords, setPauseRecords] = useState([]);
  const [countRecords, setCountRecords] = useState([]);

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

  const handleCount = () => {
    if (isStart) {
      const currentTime = Calculate(counter);
      setCountRecords([
        ...countRecords,
        { time: currentTime, index: countRecords.length + 1 },
      ]);
    } else {
      message.error('无法计次，因为计时器当前处于暂停状态');
    }
  };
  const handleResume = () => {
    previousRef.current = Date.now();
    setIsStart(true);
  };

  const handlePause = () => {
    if (isStart) {
      const currentTime = Calculate(counter);
      setPauseRecords([
        ...pauseRecords,
        { time: currentTime, index: pauseRecords.length + 1 },
      ]);
      setIsStart(false);
    }
  };

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
        <Button
          style={{ backgroundColor: '#228EE9', color: '#1e04f1' }}
          type="primary"
          onClick={handleCount}
        >
          计次
        </Button>
        <Button type="default" onClick={handleReset}>
          重置
        </Button>
      </div>
      <div className="tools-records">
        <div className="record-section">
          <ul>
            {countRecords.map((record, index) => (
              <li key={index}>
                计次{record.index}: {record.time}
              </li>
            ))}
            {pauseRecords.map((record, index) => (
              <li key={index}>
                暂停{record.index}: {record.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToolModule(Timer);
