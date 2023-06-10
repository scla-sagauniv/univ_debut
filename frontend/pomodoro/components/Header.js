import React from 'react';
const Header = () => {
  const logout = () => {
    // ログアウト処理
    console.log("ログアウト処理")
  }
  return (
    <header className="header-container">
      <h1 className="header-title">ふるどけいさんのポモドーロタイマー</h1>
      <div className="header-auth">
        <div className="header-logout">
          <a className="logout-button" onClick={() => logout()}>ログアウト</a>
        </div>
        <div className="header-icons">
          {/* faviconをアイコンにする */}
          <img className="header-icon" src="/favicon.ico" alt="icon" />
        </div>
      </div>
    </header>
  );
}
export default Header