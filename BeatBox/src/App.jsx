import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import SignupForm from './Page/signup';
import LoginPage from './Page/login';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<div>Home Page</div>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
