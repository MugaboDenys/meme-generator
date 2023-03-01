import "./App.css";

function App() {
  const thingsArray = ["Thing 1", "Thing 2"]
  const para = thingsArray.map(thing=>
    <p>{thing}</p>
  )
  return (
    <div className="App">
      <button>add item</button>
      {para}
    </div>
  );
}

export default App;