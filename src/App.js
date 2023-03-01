import "./App.css";

function App() {
  const thingsArray = ["Thing 1", "Thing 2"]
  const para = thingsArray.map(thing=>
    <p>{thing}</p>
  )
  const handleThings = ()=>{
    thingsArray.push(`Thing ${thingsArray.length+1}`)
    return(
      console.log(thingsArray)
      )
  }
  return (
    <div className="App">
      <button onClick={handleThings}>add item</button>
      {para}
    </div>
  );
}

export default App;