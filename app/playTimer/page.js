'use client'
import { useState } from 'react';
import Header from '/components/Header';
import Timer from '/components/Timer';

const PlayTimer = () => {
  const [inputValue, setInputValue] = useState('');
  const [hypotheses, setHypotheses] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      setHypotheses((prevHypotheses) => [inputValue, ...prevHypotheses.slice(0, 9)]);
      setInputValue('');
    }
  };

  return (
    <main>
      <Header />
      <div className="flex justify-center">
        <Timer />
      </div>
      <div className="flex justify-center">
        <div className=" bg-gray-200 m-2 p-2 rounded" >
          
          <div className="flex first-line:"><span>&#128204;</span>
          <h2>現状</h2></div>
          <input type="checkbox" ></input>
           <p  className="inline">分からないところが分かっている</p><div></div>
           <input type="checkbox" ></input>
           <p className="inline">分からないところが分からない</p><div></div>
           <input type="checkbox" ></input>
          <p className="inline">分からないところが分からない状況を何とかする術を知らない</p>
          <div className="flex first-line:">
          <span>&#129300;</span><h2>悩んでいること</h2> </div>
          <input className='mb-5 w-full'></input>
          <h2>悩みから得られる仮説</h2>
          <input
            type="text "
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterKey}
          />
          <div>
            {hypotheses.map((hypothesis, index) => (
              <p key={index}>{hypothesis}</p>
            ))}
          </div>
          <h2>仮説から得られた結論</h2>
          <input></input>
        </div>
        
      </div>
    </main>
  );
};

export default PlayTimer;
