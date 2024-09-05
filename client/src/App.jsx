import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './Components/Navbar';
import './App.css';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignupPage />} /> {/* Correct reference to Signup */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
