import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const url = "https://reqres.in/api/users";
  const [userData, setUserData] = useState([]);

  const fetchInfo = function () {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
        console.log("Fetched Data", data);
      });
  };

  useEffect((data) => {
    console.log('Fetching data...');
    fetchInfo();
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <h1>User Details</h1>
        <p>
          {userData.map((user) => (
            <p>
              {user.first_name}
            </p>
          ))}
        </p>
      </header>
    </div>
  );
  
}

export default App;
