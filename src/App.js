import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0)

  function handleNegClick() {
    setCount(prev => prev - 1)
}
function handlePlusClick() {
  setCount(prev => prev + 1)
}
  
  return (
    <div className="counter">
            <button className="counter--minus" onClick={handleNegClick}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={handlePlusClick}>+</button>
        </div>
  );
}

export default App;
