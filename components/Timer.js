'use client'
import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(900);
  const [run, setRun] = useState(false);
  useEffect(() => {
    let countDown;
    if(run){
    countDown = setInterval(() => {
      setTime(Time => {
        if (Time === 0) {
          clearInterval(countDown);
          alert('タイマーが終了しました');
          return Time;
        }
        return Time - 1;
      });
    }, 1000);
  }
    return () => {
      clearInterval(countDown);
    };
  }, [run]);
  
  const Start = () => {
    setRun(true);
  };
  
  const Stop = () => {
    setRun(false);
  };
  const Reset = () => {
    setTime(900);
    setRun(false);
  };
const minute = Math.floor(time / 60);
const second = time - minute * 60;
  return (
    <div>
    <h2 style={{ fontSize: '2rem' }}>
      {minute}分 {second}秒
    </h2>
    <div className="flex justify-center mt-4">
      {run ? (
        <button
          onClick={Stop}
        >
          ストップ
        </button>
      ) : (
        <button
          onClick={Start}
        >
          スタート
        </button>
      )}  <button
      onClick={Reset}
    >
      リセット
    </button>
    </div>
  </div>
  );
};

export default Timer;
