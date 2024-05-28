// import { TimerOutlined } from '@fett/icons'; 明天换
import { useState,useRef,useEffect } from 'react';
import { TransformOutlined } from '@fett/icons';
import { Button } from 'antd';


import Calculate from './Calculate';
import ToolModule from '@/components/ToolModule';
import { TOOLS_CATEGORY_ENUM } from '@/types';
import './index.css';
const Timer=()=>{
    const[isStart,setIsStart]=useState(false);
    const[counter,setCounter]=useState(0);
    const previousRef = useRef(Date.now());

    useEffect(() => {
        let animationFrameId:number;
        const updateCounter = () => {
          if (isStart) {
            //计算从上一帧到现在的时间差
            const passMs = Date.now() - previousRef.current;
            previousRef.current = Date.now();
            setCounter(c => c + passMs);
            animationFrameId = requestAnimationFrame(updateCounter);
          }
        };
        if (isStart) {
          updateCounter();
        }
        //清理函数，组件卸载时取消未完成的raf
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
return(
    <div>
        <div className="card duration">
           {Calculate(counter)}
        </div>
        <div className='controls'>
            {!isStart ?<Button style={{ backgroundColor: '#18a0582f', color:'#18a058'}} type="primary" background-Color='green' onClick={handleResume}>开始计时</Button>
            :<Button type="primary" style={{ backgroundColor: '#ffeeee', color:'#fa4d4d' }} onClick={handlePause}>暂停</Button>}
            <Button type="default" onClick={handleReset}>重置</Button>
        </div>
    </div>
)

}

export default ToolModule(Timer, {
    key: 'Timer',
    title: '计时器',
    description: '用于观察事物的持续时间',
    path: 'timer',
    icon: <TransformOutlined />,
    keywords: ['timer'],
    category: TOOLS_CATEGORY_ENUM.DEVELOP,
  });

  