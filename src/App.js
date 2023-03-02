import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [things, setThings] = React.useState(["Thing 1","Thing 2"])
  function addItem() {
    setThings(newThing => [...newThing, `Thing ${newThing.length + 1}`])
  }
  const thingsElements = things.map(thing => <p key={thing}>{thing} </p>)
  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
    </div>
  );
}

export default App;
