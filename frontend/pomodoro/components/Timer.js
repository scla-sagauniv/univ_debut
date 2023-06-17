'use client'
import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(900); // 初期値は900秒 (15分)

  useEffect(() => {
    const countDownTimer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(countDownTimer);
          alert('タイマーが終了しました');
          return prevTime;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countDownTimer);
    };
  }, []);

  const minuteCount = Math.floor(time / 60);
  const secondCount = time - minuteCount * 60;

  return (
    <div>
      <h2>タイマー: {minuteCount}分 {secondCount}秒</h2>
    </div>
  );
};

export default Timer;
