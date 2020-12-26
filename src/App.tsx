import React, { useState } from 'react';
import Button from './components/Button'
// import { Input } from './components/Input'
function App() {
  const [ value, setValue ] = useState(0)
  const handleClick = (e: any) => {
    // console.log(123)
    setValue(e.target.value)
  }
  return (
    <div className="app">
      <Button>按钮</Button>
      <Button type='link' onClick={handleClick}>按钮</Button>
      <Button size='mini' circle disabled>按钮</Button>
      <Button type="link"  disabled href="http://www.baidu.com" onClick={handleClick}>baidu</Button>

    </div>
  );
}

export default App;
