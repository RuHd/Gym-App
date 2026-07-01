'use client'

import { useEffect, useState } from 'react';
import './Timer.scss'

interface TimerProps {
    value: number; // seconds
    extraTime?: number; // seconds
    style?: React.CSSProperties;
    setExtraTime: (time: number) => void;
    isDone: boolean;
}

const Timer = ({extraTime = 0, ...props} : TimerProps) => {
  const [duration, setduration] = useState(props.value)

  useEffect(() => {
    const timer = setInterval(() => {
      if(props.isDone) {
        setduration(props.value)
        return clearInterval(timer);
      }

      if(duration > 0) {
        setduration(prev => prev - 1);
        console.log("tick")
      }
      if (extraTime > 0) {
        setduration((prev) => prev + extraTime)
        props.setExtraTime(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [duration, props.isDone]);

  return (
    <span className="Timer" 
          style={{...props.style }}
    >
      {Math.floor(duration / 60).toString().padStart(2, '0')}:{(duration % 60).toString().padStart(2, '0')}
    </span>
  )
}

export default Timer