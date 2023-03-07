import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
})
  function toggleFavorite(){
      setContact(contact=>{
        return{
        ...contact,
        isFavorite : !contact.isFavorite}
      })
  }
  let icn = contact.isFavorite ? "star-empty.png" : "star-filled.png"
  return (
    <div className="App">
       <article className="card">
                <img src="./images/user.png" className="card--image" alt='' />
                <div className="card--info">
                    <img 
                        src={`../images/${icn}`} 
                        className="card--favorite"
                        alt=''
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        John Doe
                    </h2>
                    <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>
                </div>
                
            </article>
    </div>
  );
}

export default App;
