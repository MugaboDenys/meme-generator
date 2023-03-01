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

  function greeting(name) {
    const date = new Date()
    const hours = date.getHours()
    
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))
  
  return (
    <div className="App">
      <button onClick={handleThings}>add item</button>
      {para}
    </div>
  );
}

export default App;