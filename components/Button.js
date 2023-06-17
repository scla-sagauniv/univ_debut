import React from 'react';
const Button = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
      <h3 className="flex justify-center items-center font-black text-5xl m-20">
        ログイン</h3>
    
        <p>
        <img src="/image.png" alt="test" />
          <input type="id" className="bg-[#E0DCD1] m-5 flex justify-center items-center font-black text-3xl" placeholder="user name" ></input> </p>
      

        
        <input type="id" className="bg-[#E0DCD1] m-5 flex justify-center items-center font-black text-3xl"  placeholder="password" ></input> 
        
        
          {/* <Link href="/login/"> */}
          <div className ="m-10 flex justify-center items-center"><button  className="bg-[#75533C] hover:bg-[#AF9268] text-white font-bold text-3xl py-8 px-20 rounded text-center m-5">
              ログイン
          </button>
          </div>

          </div>
      
        {/* </Link> */}
    </div>
  );
}
export default Button