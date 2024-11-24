import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Routes>          
        <Route path="/" element={loggedIn ? <Navigate replace to="/home" /> : <Login parentCallback={callbackFunction}  />} />
        <Route path="/login" element={<Login parentCallback={callbackFunction}  />} />
        <Route path="/home" element={loggedIn ? <Home /> : <Login parentCallback={callbackFunction}  />} />
      </Routes>
    </Router>
  );
};

export default App;
