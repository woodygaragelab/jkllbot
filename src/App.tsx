import React, { useState } from 'react';
import ChatApp from './ChatApp.tsx'
import SearchApp from './SearchApp.tsx'
import MyIssue from './MyIssue.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('支援企業');

  const renderPanel = () => {
    switch(activeMenu) {
      case '支援企業':
        return <SearchApp/>;
      case 'あなたの課題':
        return <MyIssue />;
      case 'Chat':
        return <ChatApp/>;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="sidebar">
          <ul>
            {['あなたの課題', '支援企業', 'Chat'].map((menu) => (
              <li
                key={menu}
                className={menu === activeMenu ? 'active' : ''}
                onClick={() => setActiveMenu(menu)}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          {renderPanel()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// スタイルをJSX内に記述する場合（必要に応じてstyles.cssに記載してもOK）
const style = document.createElement('style');
style.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
  }
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
  .header {
    position: absolute;
    width: 100%;
    padding: 15px;
    background-color:rgb(255, 0, 0);
    color: white;
    text-align: center;
    font-size: 14px;
  }
  .footer {
    // position: absolute;
    // bottom: 0;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: white;
    text-align: center;
    font-size: 14px;
  }
  .main-content {
    display: flex;
    flex: 1;
  }
  .sidebar {
    width: 200px;
    padding-top: 50px;
    background-color: #f0f0f0;
  }
  .sidebar ul {
    list-style: none;
  }
  .sidebar li {
    padding: 15px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .sidebar li.active {
    background-color: #ddd;
    font-weight: bold;
  }
  .content {
    width: 600px;
    padding: 50px;
    flex: 1;
  }
  .panel {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 4px;
    background: #fff;
  }
  .form-group {
    margin-bottom: 10px;
  }
  input[type="text"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

export default App;