import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Register from './screens/AuthPages/Register';
import Login from './screens/AuthPages/Login';
import ChangePassword from './screens/AuthPages/ChangePassword';
import ResetPassword from './screens/AuthPages/ResetPassword';
import ForgetPassword from './screens/AuthPages/ForgetPassword';
import Addbook from './screens/Addbook';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/addbook" element={<Addbook />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
