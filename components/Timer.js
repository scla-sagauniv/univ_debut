'use client'
import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(900); // 初期値は900秒 (15分)
  const [Run, setRun] = useState(false);
  useEffect(() => {
    const countDown = setInterval(() => {
      setTime(Time => {
        if (Time === 0) {
          clearInterval(countDown);
          alert('タイマーが終了しました');
          return Time;
        }
        return Time - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countDown);
    };
  }, []);

  const minute = Math.floor(time / 60);
  const second = time - minute * 60;

  return (
    <div>
      <h2 style={{ fontSize: '2rem' }}> {minute}分 {second}秒</h2>
    </div>
  );
};

export default Timer;
