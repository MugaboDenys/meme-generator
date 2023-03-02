import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
})
let starIcon = contact.isFavorite ? "../images/star-filled.png" : "../images/star-empty.png"
function toggleFavorite() {
  console.log("Toggle Favorite")
}
  return (

    <div className="counter">
            <article className="card">
                <img src="./images/user.png" alt='' className="card--image" />
                <div className="card--info">
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt=""
                    />
                    <h2 className="card--name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </div>
  );
}

export default App;
