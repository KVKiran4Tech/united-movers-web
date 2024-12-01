import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import SignUp from './pages/auth/signup/SignUp';
import ResetPassword from './pages/auth/reset-password/ResetPassword';
import Logout from './pages/auth/logout/Logout';

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router>
      <Routes>          
        <Route path="/" element={loggedIn ? <Navigate replace to="/home" /> : <Login parentCallback={callbackFunction}  />} />
        <Route path="/auth/login" element={<Login parentCallback={callbackFunction}  />} />
        <Route path="/home" element={loggedIn ? <Home /> : <Login parentCallback={callbackFunction}  />} />
        <Route path="/auth/logout" element={<Logout />} />
        <Route path="/auth/forgot" element={<ForgotPassword />} />
        <Route path="/auth/reset" element={<ResetPassword />} />
        <Route path="/auth/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
