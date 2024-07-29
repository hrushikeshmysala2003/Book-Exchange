import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/AuthPages/Register";
import Login from "./screens/AuthPages/Login";
import ChangePassword from "./screens/AuthPages/ChangePassword";
import ResetPassword from "./screens/AuthPages/ResetPassword";
import ForgetPassword from "./screens/AuthPages/ForgetPassword";
import Addbook from "./screens/Addbook";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";
import Profile from "./screens/Profile/Profile";
import Chat from "./screens/Chat/Chat";

function App() {
  const dispatch = useDispatch();
  const { loading, isAuthenticated, user, error, message } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // console.log("isauth: ", isAuthenticated);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                redirect="/login"
              >
                <Profile user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addbook"
            element={isAuthenticated ? <Addbook user={user} /> : <Login />}
          />
          <Route path="/chat/:roomId" element={<Chat />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
