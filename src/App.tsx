import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import './styles.css'; // 別途CSSを用意する場合
import ChatApp from './ChatApp.tsx'

// 各画面のコンポーネント
interface PanelProps {
  title: string;
}

const Panel: React.FC<PanelProps> = ({ title }) => {
  return (
    <div className="panel">
      <h2>{title}</h2>
      <div className="form-group">
        <input type="text" placeholder="入力フィールド1" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="入力フィールド2" />
      </div>
      <button>{title} ボタン</button>
    </div>
  );
};

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('課題');

  const renderPanel = () => {
    // activeMenuに応じたコンポーネントを返す
    switch(activeMenu) {
      case '課題':
        return <Panel title="課題" />;
      case '検索':
        return <Panel title="検索" />;
      case 'Chat':
        return <ChatApp/>;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          {['課題', '検索', 'Chat'].map((menu) => (
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
  );
};

// スタイルをJSX内に記述する場合（必要に応じてstyles.cssに記載してもOK）
const style = document.createElement('style');
style.innerHTML = `
  .container {
    display: flex;
    height: 100vh;
    font-family: Arial, sans-serif;
  }
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sidebar li {
    padding: 15px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
  }
  .sidebar li.active {
    background-color: #ddd;
    font-weight: bold;
  }
  .content {
    flex: 1;
    padding: 2px;
  }
  .panel {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 4px;
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
    cursor: pointer;
  }
`;
document.head.appendChild(style);

export default App;