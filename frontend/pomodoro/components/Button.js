import React from 'react';
const Button = () => {
  return (
    <div className="login button">
      <h3>ログイン</h3>
      <p>
        <input type="id" className="bg-[#E0DCD1]"  placeholder="user name" margin ></input> </p>
      
        
        <input type="id" className="bg-[#E0DCD1]"  placeholder="password"></input> 
        
          {/* <Link href="/login/"> */}
          <button  className="bg-[#75533C] hover:bg-[#AF9268] text-white font-bold py-2 px-4 rounded">
              ログイン
          </button>
      
        {/* </Link> */}
    </div>
  );
}
export default Button


