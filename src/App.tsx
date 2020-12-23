import React from 'react';
import Button from './components/Button/button'

function App() {
  const handleClick = () => {
    console.log(123)
  }
  return (
    <div className="app">
      <Button>按钮</Button>
      <Button type='link' onClick={handleClick}>按钮</Button>
      <Button size='mini' circle>按钮</Button>
      <Button type="link" href="http://www.baidu.com" onClick={handleClick}>baidu</Button>
    </div>
  );
}

export default App;
