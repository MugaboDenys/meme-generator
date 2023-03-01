import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [isImportant, setIsImportant] = React.useState("Yes")

  function handleClick() {
        setIsImportant("No")
  }
  
  return (
    <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value cursor-pointer" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
    </div>
  );
}

export default App;
