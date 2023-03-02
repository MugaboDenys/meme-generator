import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isGoingOut,setIsGoingOut] = useState(true)
  function handleHover() {
    setIsGoingOut(!isGoingOut)
  }
  return (
    <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>
        <div className="state--value" onMouseEnter={handleHover}  >
            <h1>{`${isGoingOut ? "Yes" : "No"}`}</h1>
        </div>
    </div>
  )
}

export default App;
