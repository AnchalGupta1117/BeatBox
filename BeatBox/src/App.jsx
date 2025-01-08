import { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from './Page/signup';
import LoginPage from './Page/login';
import Home from './Page/home';
import FavouriteSongs from './Page/Favourites';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favourites" element={<FavouriteSongs />} />
      </Routes>
    </Router>
  );
}

export default App
