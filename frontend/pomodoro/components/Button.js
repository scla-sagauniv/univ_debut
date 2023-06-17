import React from 'react';
const Button = () => {
  return (
    <div className="login button">
      <h3 className="text-sm">ログイン</h3>
      <p>
        <input type="id" className="bg-[#E0DCD1] m-1"  placeholder="user name" ></input> </p>
      
        
        <input type="id" className="bg-[#E0DCD1] m-1"  placeholder="password" ></input> 
        
          {/* <Link href="/login/"> */}
          <button  className="bg-[#75533C] hover:bg-[#AF9268] text-white font-bold py-2 px-4 rounded">
              ログイン
          </button>
      
        {/* </Link> */}
    </div>
  );
}
export default Button


