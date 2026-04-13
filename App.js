import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import axios from "axios";
import "./index.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      {currentUser ? (
        <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <Login setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
}


export default App;
