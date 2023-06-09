'use client'
import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(900);
  const [run, setRun] = useState(false);
  const [timerclass, setTimerclass] = useState('');
  useEffect(() => {
    let countDown;
    // let timerClassname = '';
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
    // timerClassname = 'mm';
  } else {
    // timerClassname = '';
  }
    return () => {
      clearInterval(countDown);
    };
  }, [run]);
  
  const Start = () => {
    setRun(true);
    setTimerclass('mm')
  };
  
  const Stop = () => {
    setRun(false);
    setTimerclass('')
  };
  const Reset = () => {
    setTime(900);
    setRun(false);
  };
const minute = Math.floor(time / 60);
const second = time - minute * 60;
const timer = 'justify-center flex ' + run ? 'mm' : '' ;
return (
    <div className='flex justify-center'>
    <div className={timerclass}><img  src="image.png" className='w-24 h-2/3 my-6 ' /></div>
    <div>
    <h2 style={{ fontSize: '3rem' }} className='justify-center items-center my-8'>
      {minute}分 {second}秒
    </h2>
    <div className="flex justify-center mt-4 my-3">
      {run ? (
          <button className='bg-[#75533C] hover:bg-[#AF9268] text-white font-bold py-2 px-4 rounded m-1 bb'
            onClick={Stop}
          >
            ストップ
          </button>
      ) : (
        <button
          onClick={Start} className="bg-[#75533C] hover:bg-[#AF9268] text-white font-bold py-2 px-4 rounded m-1 bb"
        >
          スタート
        </button>
      )}  <button className='bg-[#75533C] hover:bg-[#AF9268] text-white font-bold py-2 px-4 rounded m-1 bb'
      onClick={Reset}
    >
      リセット
    </button>
    </div>
  </div>
  <div className={timerclass}><img  src="image.png" className='w-24 h-2/3 justify-center flex my-6 ' /></div>
  </div>
  );
};

export default Timer;
