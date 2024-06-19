"use client";
import { Button, message } from 'antd';
import { useEffect, useRef, useState } from 'react';

import ToolModule from '@/components/ToolModule';
import { calculate } from '@/utils';
import './index.css';
import { TOOLS_KEY_ENUM } from '@/types';

const Timer = () => {
  const [isStart, setIsStart] = useState(false);
  const [counter, setCounter] = useState(0);
  const previousRef = useRef(Date.now());
  const [pauseRecords, setPauseRecords] = useState<
    { time: string; index: number }[]
  >([]);
  const [countRecords, setCountRecords] = useState<
    { time: string; index: number }[]
  >([]);

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
      const currentTime = calculate(counter);
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
      const currentTime = calculate(counter);
      setPauseRecords([
        ...pauseRecords,
        { time: currentTime, index: pauseRecords.length + 1 },
      ]);
      setIsStart(false);
    }
  };

  const handleReset = () => {
    setCounter(0);
    setCountRecords([]);
    setPauseRecords([]);
  };
  return (
    <div>
      <div className=" tools-duration">{calculate(counter)}</div>
      <div className="tools-controls">
        {!isStart ? (
          <Button
            style={{ backgroundColor: '#18a0582f', color: '#18a058' }}
            type="primary"
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
          style={{ backgroundColor: '#f59e0b2f', color: '#f59e0b' }}
          type="primary"
          onClick={handleCount}
        >
          计次
        </Button>
        <Button type="default" onClick={handleReset}>
          重置
        </Button>
      </div>
      {pauseRecords.length > 0 || countRecords.length > 0 ? (
        <div className="tools-records">
          <div className="record-section">
            <ul>
              {countRecords.map((record, index) => (
                <li key={index} data-prefix="计次" data-type="count">
                  {record.index}{' '}
                  <span className="record-row">{record.time}</span>
                </li>
              ))}
              {pauseRecords.map((record, index) => (
                <li key={index} data-prefix="暂停" data-type="pause">
                  {record.index}{' '}
                  <span className="record-row">{record.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};


export default ToolModule(Timer,TOOLS_KEY_ENUM.Timer) ;
