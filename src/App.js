import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  let isGoingOut = false;
  
  
  return (

    <div className="counter">
            <button className="counter--minus" >–</button>
            <div className="counter--count">
                <h1>{`${isGoingOut ? "Yes" : "No"}`}</h1>
            </div>
            <button className="counter--plus">+</button>
        </div>
  );
}

export default App;
