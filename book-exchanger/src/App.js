import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Register from './screens/AuthPages/Register';
import Login from './screens/AuthPages/Login';
import ChangePassword from './screens/AuthPages/ChangePassword';
import ResetPassword from './screens/AuthPages/ResetPassword';
import ForgetPassword from './screens/AuthPages/ForgetPassword';
import Addbook from './screens/Addbook';
import toast, {Toaster} from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import Profile from './screens/Profile';
function App() {
  const dispatch = useDispatch();
  const {loading, isAuthenticated, user, error, message} = useSelector(state => state.user);
  console.log(user, error, message, loading, isAuthenticated);
  
  // useEffect({
  //     if(error){
  //         toast.error(error);
  //         dispatch({type: "clearError"});
  //     },
  //     if(message){ 
  //         toast.error(message);
  //         dispatch({type: "clearMessage"});
  //     }
  // }, [dispatch, message, error])
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/addbook" element={<Addbook />} />
        </Routes>
      <Toaster />
      </div>
    </Router>
  )
}

export default App;
