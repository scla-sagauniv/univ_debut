import React from 'react';
const Header = () => {
  const logout = () => {
    // ログアウト処理
    console.log("ログアウト処理")
  }
  return (
    <header className="header-container">
      <div className=' flex justify-center w-full'>
      <img src="/image.png" className='h-20  flex justify-center'/>
      

      <h1 className="header-title flex justify-center w-100">ふるどけいさんのポモドーロタイマー</h1>
      <img src="/image.png" className='h-20  flex justify-center'/>
      

      </div>
      <div className="header-auth">
        {/* <div className="header-logout"> */}
        {/* <a className="logout-button" onClick={() => logout()}>ログアウト</a> */}
        {/* </div> */}
        {/* <div className="header-icons"> */}
        {/* faviconをアイコンにする */}
        {/* <img className="header-icon" src="/favicon.ico" alt="icon" /> */}
        {/* </div> */}
      </div>
    </header>
  );
}
export default Header
