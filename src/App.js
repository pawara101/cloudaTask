import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link,Routes } from 'react-router-dom'; // Add BrowserRouter import
import UserDetails from "./components/UserDetails"; 

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
    console.log("Fetching data...");
    fetchInfo();
  }, []);

  const handleRowClick = (userId) => {
    console.log(`Clicked on user with ID ${userId}`);

    window.location.href = `/user-details.html?id=${userId}`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="heading">User Details</h1>
        <Router>
          <Routes>
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </Router>
        <table class="usertable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th></th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleRowClick(user.id)}
                style={{ cursor: "pointer" }}
              >
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.avatar} class="avatar"></img>
                </td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
