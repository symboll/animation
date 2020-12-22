import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="app">
      <Button>按钮</Button>
      <Button type={ButtonType.Success}>按钮</Button>
      <Button size={ButtonSize.Small}>按钮</Button>
    </div>
  );
}

export default App;
